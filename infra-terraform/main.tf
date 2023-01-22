locals {
  tags                   = { azd-env-name : var.environment_name }
  sha                    = base64encode(sha256("${var.environment_name}${var.location}${data.azurerm_client_config.current.subscription_id}"))
  resource_token         = substr(replace(lower(local.sha), "[^A-Za-z0-9_]", ""), 0, 13)
  abbrKeyVaultVaults     = "kv-"
  abbrWebSitesAppService = "app-"
}
# ------------------------------------------------------------------------------------------------------
# Deploy resource Group
# ------------------------------------------------------------------------------------------------------
resource "azurecaf_name" "rg_name" {
  name          = var.environment_name
  resource_type = "azurerm_resource_group"
  random_length = 0
  clean_input   = true
}

resource "azurerm_resource_group" "rg" {
  name     = azurecaf_name.rg_name.result
  location = var.location
  tags     = local.tags
}

# ------------------------------------------------------------------------------------------------------
# Deploy application insights
# ------------------------------------------------------------------------------------------------------
module "applicationinsights" {
  source           = "./modules/applicationinsights"
  location         = var.location
  rg_name          = azurerm_resource_group.rg.name
  environment_name = var.environment_name
  workspace_id     = module.loganalytics.LOGANALYTICS_WORKSPACE_ID
  tags             = azurerm_resource_group.rg.tags
  resource_token   = local.resource_token
}

# ------------------------------------------------------------------------------------------------------
# Deploy log analytics
# ------------------------------------------------------------------------------------------------------
module "loganalytics" {
  source         = "./modules/loganalytics"
  location       = var.location
  rg_name        = azurerm_resource_group.rg.name
  tags           = azurerm_resource_group.rg.tags
  resource_token = local.resource_token
}

# ------------------------------------------------------------------------------------------------------
# Deploy key vault
# ------------------------------------------------------------------------------------------------------
module "keyvault" {
  source                   = "./modules/keyvault"
  location                 = var.location
  principal_id             = var.principal_id
  rg_name                  = azurerm_resource_group.rg.name
  tags                     = azurerm_resource_group.rg.tags
  resource_token           = local.resource_token
  access_policy_object_ids = [module.api.IDENTITY_PRINCIPAL_ID]
  secrets = [
    {
      name  = "${local.abbrKeyVaultVaults}secret-odata-password"
      value = var.oDataUserpwd
    },
    {
      name  = "${local.abbrKeyVaultVaults}secret-apikey"
      value = var._APIKey
    }
  ]
}

# ------------------------------------------------------------------------------------------------------
# Deploy app service plan
# ------------------------------------------------------------------------------------------------------
module "appserviceplan" {
  source         = "./modules/appserviceplan"
  location       = var.location
  rg_name        = azurerm_resource_group.rg.name
  tags           = azurerm_resource_group.rg.tags
  resource_token = local.resource_token
  sku_name       = "F1"
}

# ------------------------------------------------------------------------------------------------------
# Deploy app service api
# ------------------------------------------------------------------------------------------------------
module "api" {
  source         = "./modules/appservicenode"
  location       = var.location
  rg_name        = azurerm_resource_group.rg.name
  resource_token = local.resource_token

  tags               = merge(local.tags, { "azd-service-name" : "sap-cloud-sdk-api" })
  service_name       = "sap-cloud-sdk-api"
  appservice_plan_id = module.appserviceplan.APPSERVICE_PLAN_ID
  app_settings = {
    "SCM_DO_BUILD_DURING_DEPLOYMENT"        = "true"
    "AZURE_KEY_VAULT_ENDPOINT"              = module.keyvault.AZURE_KEY_VAULT_ENDPOINT
    "APPLICATIONINSIGHTS_CONNECTION_STRING" = module.applicationinsights.APPLICATIONINSIGHTS_CONNECTION_STRING
    "ODATA_URL"                             = var.oDataUrl
    "ODATA_USERNAME"                        = var.oDataUsername
    "ODATA_USERPWD"                         = "@Microsoft.KeyVault(SecretUri=${module.keyvault.AZURE_KEY_VAULT_ENDPOINT}secrets/${local.abbrKeyVaultVaults}secret-odata-password)"
    "APIKEY"                                = "@Microsoft.KeyVault(SecretUri=${module.keyvault.AZURE_KEY_VAULT_ENDPOINT}secrets/${local.abbrKeyVaultVaults}secret-apikey)"
    "APIKEY_HEADERNAME"                     = var.ApiKeyHeaderName
  }

  app_command_line = ""

  always_on = false
  identity = [{
    type = "SystemAssigned"
  }]
}
