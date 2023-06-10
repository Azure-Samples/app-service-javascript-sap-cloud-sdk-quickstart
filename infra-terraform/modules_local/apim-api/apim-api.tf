terraform {
  required_providers {
    azurerm = {
      version = "~>3.47.0"
      source  = "hashicorp/azurerm"
    }
    azurecaf = {
      source  = "aztfmod/azurecaf"
      version = "~>1.2.15"
    }
    azapi = {
      source  = "Azure/azapi"
      version = "~>1.6.0"
    }
  }
}

locals {
  appNameforAppProperties = var.api_app_name != "" ? var.api_app_name : "placeholdername"
}

# ------------------------------------------------------------------------------------------------------
# Read existing resources from different resource groups 
# ------------------------------------------------------------------------------------------------------
data "azurerm_application_insights" "appinsights" {
  name                = var.application_insights_name
  resource_group_name = var.rg_name_app
}

data "azurerm_api_management" "apim" {
  name                = var.name
  resource_group_name = var.rg_name_apim
}

# ------------------------------------------------------------------------------------------------------
# Deploy apim-api service 
# ------------------------------------------------------------------------------------------------------
resource "azurerm_api_management_api" "api" {
  name                  = var.api_name
  resource_group_name   = var.rg_name_apim
  api_management_name   = data.azurerm_api_management.apim.name
  revision              = "1"
  display_name          = var.api_display_name
  path                  = var.api_path
  protocols             = ["https"]
  service_url           = var.api_backend_url
  subscription_required = false
  api_type              = "http"
  description           = var.api_description

  import {
    content_format = "openapi"
    content_value  = file("${path.module}/../../../src/api/API_BUSINESS_PARTNER.openapi.json")
  }
}

resource "azurerm_api_management_api_policy" "policies" {
  api_name            = azurerm_api_management_api.api.name
  api_management_name = azurerm_api_management_api.api.api_management_name
  resource_group_name = var.rg_name_apim

  xml_content = file("${path.module}/apim-api-policy.xml")
}

resource "azurerm_api_management_logger" "apimLogger" {
  name                = "apimlogger"
  api_management_name = data.azurerm_api_management.apim.name
  resource_group_name = var.rg_name_apim
  resource_id         = data.azurerm_application_insights.appinsights.id

  application_insights {
    instrumentation_key = data.azurerm_application_insights.appinsights.instrumentation_key
  }
}

resource "azapi_resource" "api_app_properties" {
  type      = "Microsoft.Web/sites/config@2022-03-01"
  name      = "${local.appNameforAppProperties}/web"
  parent_id = var.api_app_id
  body = jsonencode({
    properties = {
      apiManagementConfig = {
        id = "${data.azurerm_api_management.apim.id}/apis/${var.api_name}"
      }
    }
  })
}
