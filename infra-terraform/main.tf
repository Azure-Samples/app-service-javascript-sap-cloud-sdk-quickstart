locals {
  tags                  = { azd-env-name : var.environment_name }
  sha                   = base64encode(sha256("${var.environment_name}${var.location}${data.azurerm_client_config.current.subscription_id}"))
  resource_token        = substr(replace(lower(local.sha), "[^A-Za-z0-9_]", ""), 0, 13)
  abbr_key_vault_vaults = "kv-"
  always_on             = var.sku_name == "F1" || var.sku_name == "FREE" || var.sku_name == "SHARED" ? false : true
  use_32_bit_worker     = var.sku_name == "F1" || var.sku_name == "FREE" || var.sku_name == "SHARED" ? true : false
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
      name  = "${local.abbr_key_vault_vaults}secret-odata-password"
      value = var.oDataUserpwd
    },
    {
      name  = "${local.abbr_key_vault_vaults}secret-apikey"
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
  sku_name       = var.sku_name
}

# ------------------------------------------------------------------------------------------------------
# Deploy app service api
# ------------------------------------------------------------------------------------------------------
module "api" {
  source         = "./modules_local/appservicenode"
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
    "ODATA_USERPWD"                         = "@Microsoft.KeyVault(SecretUri=${module.keyvault.AZURE_KEY_VAULT_ENDPOINT}secrets/${local.abbr_key_vault_vaults}secret-odata-password)"
    "APIKEY"                                = "@Microsoft.KeyVault(SecretUri=${module.keyvault.AZURE_KEY_VAULT_ENDPOINT}secrets/${local.abbr_key_vault_vaults}secret-apikey)"
    "APIKEY_HEADERNAME"                     = var.ApiKeyHeaderName
  }

  app_command_line  = ""
  health_check_path = var.health_check_path
  always_on         = local.always_on
  use_32_bit_worker = local.use_32_bit_worker
  identity = [{
    type = "SystemAssigned"
  }]
}

# ------------------------------------------------------------------------------------------------------
# Configures the API in the Azure API Management (APIM) service
# ------------------------------------------------------------------------------------------------------
module "apim" {
  source                    = "./modules_local/apim-api"
  count                     = var.useAPIM ? 1 : 0
  name                      = var.apimServiceName
  rg_name_apim              = var.apimResourceGroupName
  rg_name_app               = azurerm_resource_group.rg.name
  api_name                  = "api-business-partner"
  api_display_name          = "API_BUSINESS_PARTNER SAP"
  api_description           = "Business Partner residing on SAP ERP exposed via OData"
  api_path                  = "sdk/sap/opu/odata/sap/API_BUSINESS_PARTNER"
  api_backend_url           = var.apimApiSAPBackendURL
  application_insights_name = module.applicationinsights.APPLICATIONINSIGHTS_NAME
}
