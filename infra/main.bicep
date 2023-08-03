targetScope = 'subscription'

@minLength(1)
@maxLength(64)
@description('Name of the the environment which is used to generate a short unique hash used in all resources.')
param environmentName string

@minLength(1)
@description('Primary location for all resources')
param location string

// Optional parameters to override the default azd resource naming conventions. Update the main.parameters.json file to provide values. e.g.,:
// "resourceGroupName": {
//      "value": "myGroupName"
// }
param apiServiceName string = ''
param applicationInsightsDashboardName string = ''
param applicationInsightsName string = ''
param appServicePlanName string = ''
param keyVaultName string = ''
param logAnalyticsName string = ''
param resourceGroupName string = ''
param storageAccountName string = ''

@description('Resource Group containing the existing API Management instance')
param apimResourceGroupName string = 'DEMO-NEU-SAP-PM1'

@description('Name of the API Management service instance')
param apimServiceName string = 'demo-sap-apim'

@description('Target URL of the SAP backend API fronted by the existing API Management')
param apimApiSAPBackendURL string = 'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_BUSINESS_PARTNER'

@description('Flag to use Azure API Management to mediate the calls between the Web frontend and the SAP backend API')
param useAPIM bool = false

// Name of the SKU; default is F1 (Free), use B1 (Basic) for features like health checks and S1 (Standard) for production
@description('Name of the SKU of the App Service Plan')
param skuName string = 'Y1'

@description('Name of the tier of the App Service Plan')
param skuTier string = 'Dynamic'

@description('Id of the user or app to assign application roles')
param principalId string = ''

// App specific parameters - provide the values via the main.parameters.json referencing e.g. environment parameters
@description('SAP OData service URL')
param oDataUrl string = 'https://sandbox.api.sap.com/s4hanacloud'

@description('SAP OData user name')
param oDataUsername string = ''

@description('SAP OData user password')
@secure()
param oDataUserpwd string = ''

@description('API Key')
@secure()
param _APIKey string = ''

@description('API Key Header Name')
param ApiKeyHeaderName string = 'APIKey'

var abbrs = loadJsonContent('./abbreviations.json')
var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))
var tags = { 'azd-env-name': environmentName }

// Organize resources in a resource group
resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: !empty(resourceGroupName) ? resourceGroupName : '${abbrs.resourcesResourceGroups}${environmentName}'
  location: location
  tags: tags
}

//Reference the existing API Management instance from another resource group but same subscription
resource apimrg 'Microsoft.Resources/resourceGroups@2021-04-01' existing = if (useAPIM){
  name: apimResourceGroupName
  scope: subscription()
}

// The application backend
module api './app/api.bicep' = {
  name: 'api'
  scope: rg
  params: {
    name: !empty(apiServiceName) ? apiServiceName : '${abbrs.webSitesAppService}api-${resourceToken}'
    location: location
    tags: tags
    applicationInsightsName: monitoring.outputs.applicationInsightsName
    appServicePlanId: appServicePlan.outputs.id
    keyVaultName: keyVault.outputs.name
    storageAccountName: storage.outputs.name
    appSettings: {
      ODATA_URL: oDataUrl
      ODATA_USERNAME: oDataUsername
      ODATA_USERPWD: '@Microsoft.KeyVault(SecretUri=${keyVault.outputs.endpoint}secrets/${abbrs.keyVaultVaults}secret-odata-password)'
      APIKEY: '@Microsoft.KeyVault(SecretUri=${keyVault.outputs.endpoint}secrets/${abbrs.keyVaultVaults}secret-apikey)'
      APIKEY_HEADERNAME: ApiKeyHeaderName
    }
  }
}

// Backing storage for Azure Functions
module storage './core/storage/storage-account.bicep' = {
  name: 'storage'
  scope: rg
  params: {
    name: !empty(storageAccountName) ? storageAccountName : '${abbrs.storageStorageAccounts}${resourceToken}'
    location: location
    tags: tags
  }
}

// Give the API access to KeyVault
module apiKeyVaultAccess './core/security/keyvault-access.bicep' = {
  name: 'api-keyvault-access'
  scope: rg
  params: {
    keyVaultName: keyVault.outputs.name
    principalId: api.outputs.SERVICE_API_IDENTITY_PRINCIPAL_ID
  }
}

// Create an App Service Plan to group applications under the same payment plan and SKU
module appServicePlan './core/host/appserviceplan.bicep' = {
  name: 'appserviceplan'
  scope: rg
  params: {
    name: !empty(appServicePlanName) ? appServicePlanName : '${abbrs.webServerFarms}${resourceToken}'
    location: location
    tags: tags
    sku: {
      name: skuName
      tier: skuTier
    }
  }
}

// Store secrets in a keyvault
module keyVault './core/security/keyvault.bicep' = {
  name: 'keyvault'
  scope: rg
  params: {
    name: !empty(keyVaultName) ? keyVaultName : '${abbrs.keyVaultVaults}${resourceToken}'
    location: location
    tags: tags
    principalId: principalId
  }
}

// Store Odata Password in KeyVault
module oDataPassword './core/security/keyvault-secret.bicep' = {
  name: 'odatapassword'
  scope: rg
  params: {
    name: '${abbrs.keyVaultVaults}secret-odata-password'
    keyVaultName: keyVault.outputs.name
    tags: tags
    secretValue: oDataUserpwd
  }
}

// Store API key in KeyVault
module ApiKey './core/security/keyvault-secret.bicep' = {
  name: 'apikey'
  scope: rg
  params: {
    name: '${abbrs.keyVaultVaults}secret-apikey'
    keyVaultName: keyVault.outputs.name
    tags: tags
    secretValue: _APIKey
  }
}

// Monitor application with Azure Monitor
module monitoring './core/monitor/monitoring.bicep' = {
  name: 'monitoring'
  scope: rg
  params: {
    location: location
    tags: tags
    logAnalyticsName: !empty(logAnalyticsName) ? logAnalyticsName : '${abbrs.operationalInsightsWorkspaces}${resourceToken}'
    applicationInsightsName: !empty(applicationInsightsName) ? applicationInsightsName : '${abbrs.insightsComponents}${resourceToken}'
    applicationInsightsDashboardName: !empty(applicationInsightsDashboardName) ? applicationInsightsDashboardName : '${abbrs.portalDashboards}${resourceToken}'
  }
}

// Configures the API in the Azure API Management (APIM) service
module apimApi './app/apim-api.bicep' = if (useAPIM) {
  name: 'apim-api-deployment'
  scope: apimrg
  params: {
    name: useAPIM ? apimServiceName : ''
    apiName: 'api-business-partner'
    apiDisplayName: 'API_BUSINESS_PARTNER SAP'
    apiDescription: 'Business Partner residing on SAP ERP exposed via OData'
    apiPath: 'sdk/sap/opu/odata/sap/API_BUSINESS_PARTNER'
    apiBackendUrl: apimApiSAPBackendURL
    applicationInsightsName: monitoring.outputs.applicationInsightsName
    applicationInsightsRG: rg.name
    //apiAppName: api.outputs.SERVICE_API_NAME
  }
}

// App outputs
output APPLICATIONINSIGHTS_CONNECTION_STRING string = monitoring.outputs.applicationInsightsConnectionString
output AZURE_KEY_VAULT_ENDPOINT string = keyVault.outputs.endpoint
output AZURE_KEY_VAULT_NAME string = keyVault.outputs.name
output AZURE_LOCATION string = location
output AZURE_TENANT_ID string = tenant().tenantId
output USE_APIM bool = useAPIM
output SAP_CLOUD_SDK_API_URL array = useAPIM ? [ apimApi.outputs.SERVICE_API_URI, api.outputs.SERVICE_API_URI ]: [api.outputs.SERVICE_API_URI]
output SAP_CLOUD_SDK_API_APPLICATIONINSIGHTS_CONNECTION_STRING string = monitoring.outputs.applicationInsightsConnectionString
