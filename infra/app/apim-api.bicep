param name string
param applicationInsightsName string
param applicationInsightsRG string

@description('Resource name to uniquely identify this API within the API Management service instance')
@minLength(1)
param apiName string

@description('The Display Name of the API')
@minLength(1)
@maxLength(300)
param apiDisplayName string

@description('Description of the API. May include HTML formatting tags.')
@minLength(1)
param apiDescription string

@description('Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.')
@minLength(1)
param apiPath string

@description('Absolute URL of the backend service implementing this API.')
param apiBackendUrl string

@description('Resource name for backend Web App or Function App')
param apiAppName string = ''

var apiPolicyContent = loadTextContent('apim-api-policy.xml')

/* OpenAPI import configuration. Uncomment to use. Drop OData import configuration.
  resource restApi 'Microsoft.ApiManagement/service/apis@2021-12-01-preview' = {
  name: apiName
  parent: apimService
  properties: {
    description: apiDescription
    displayName: apiDisplayName
    path: apiPath
    protocols: [ 'https' ]
    subscriptionRequired: false
    type: 'http'
    format: 'openapi'
    serviceUrl: apiBackendUrl
    value: string(loadJsonContent('../../src/api/API_BUSINESS_PARTNER.openapi.json'))
  }
}*/

/* Create SAP OData API in Azure APIM via EDMX metadata doc.
   For large docs use odata-link and supply resolvable URL to metadata file.
   Alternatively use json definition for OData v4.  */
resource restApi 'Microsoft.ApiManagement/service/apis@2023-03-01-preview' = {
  name: apiName
  parent: apimService
  properties: {
    description: apiDescription
    displayName: apiDisplayName
    path: apiPath
    protocols: [ 'https' ]
    subscriptionRequired: false
    type: 'odata'
    /*format: 'odata'*/
    format: 'odata-link'
    serviceUrl: apiBackendUrl
    /* Use with smaller metadata XML documents using loadTextContent()*/
    /* or supply as OData v4 metadata JSON definition. Generate from EDMX here: https://aka.ms/ODataOpenAPI */
    /*value: string(loadTextContent('../../src/api/API_BUSINESS_PARTNER.edmx'))*/
    value: 'https://raw.githubusercontent.com/Azure-Samples/app-service-javascript-sap-cloud-sdk-quickstart/main/src/api/API_BUSINESS_PARTNER.edmx'
  }
}

resource apiPolicy 'Microsoft.ApiManagement/service/apis/policies@2021-12-01-preview' = {
  name: 'policy'
  parent: restApi
  properties: {
    format: 'rawxml'
    value: apiPolicyContent
  }
}

resource appInsightsApim 'Microsoft.Insights/components@2020-02-02' existing = if (!empty(applicationInsightsName)) {
  name: applicationInsightsName
  scope: resourceGroup(applicationInsightsRG)
}

/*resource namedValueAppInsightsKey 'Microsoft.ApiManagement/service/namedValues@2020-06-01-preview' = {
  parent: apimService
  name: 'instrumentationKey'
  properties: {
    tags: []
    secret: false
    displayName: 'instrumentationKey'
    value: appInsightsApim.properties.InstrumentationKey
  }
}*/

resource apimLogger 'Microsoft.ApiManagement/service/loggers@2021-04-01-preview' = {
  parent: apimService
  name: 'apimlogger'
  properties:{
    resourceId: appInsightsApim.id
    description: 'Application Insights for APIM'
    loggerType: 'applicationInsights'
    credentials:{
      instrumentationKey: appInsightsApim.properties.InstrumentationKey
    }
  }
}

resource apimService 'Microsoft.ApiManagement/service@2021-08-01' existing = {
  name: name
}

// Necessary due to https://github.com/Azure/bicep/issues/9594
// placeholderName is never deployed, it is merely used to make the child name validation pass
var appNameForBicep = !empty(apiAppName) ? apiAppName : 'placeholderName'

resource apiAppProperties 'Microsoft.Web/sites/config@2022-03-01' = if (!empty(apiAppName)) {
  name: '${appNameForBicep}/web'
  kind: 'string'
  properties: {
      apiManagementConfig: {
        id: '${apimService.id}/apis/${apiName}'
      }
  }
}

output SERVICE_API_URI string = '${apimService.properties.gatewayUrl}/${apiPath}'
