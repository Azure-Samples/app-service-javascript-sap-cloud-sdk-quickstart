param name string
param location string = resourceGroup().location
param tags object = {}

param allowedOrigins array = []
param appCommandLine string = ''
param applicationInsightsName string = ''
param appServicePlanId string
param appSettings object = {}
param keyVaultName string
param storageAccountName string
param serviceName string = 'sap-cloud-sdk-api'
param healthCheckPath string = '/health'
param use32BitWorkerProcess bool = false

param alwaysOn bool = true

module api '../core/host/functions.bicep' = {
  name: '${name}-function-node-module'
  params: {
    name: name
    location: location
    tags: union(tags, { 'azd-service-name': serviceName })
    allowedOrigins: allowedOrigins
    appCommandLine: appCommandLine
    applicationInsightsName: applicationInsightsName
    appServicePlanId: appServicePlanId
    appSettings: appSettings
    keyVaultName: keyVaultName
    runtimeName: 'node'
    runtimeVersion: '18-lts'
    storageAccountName: storageAccountName
    scmDoBuildDuringDeployment: true
  }
}

output SERVICE_API_IDENTITY_PRINCIPAL_ID string = api.outputs.identityPrincipalId
output SERVICE_API_NAME string = api.outputs.name
output SERVICE_API_URI string = api.outputs.uri
