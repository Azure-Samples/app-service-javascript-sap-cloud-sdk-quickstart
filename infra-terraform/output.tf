output "AZURE_KEY_VAULT_ENDPOINT" {
  value     = module.keyvault.AZURE_KEY_VAULT_ENDPOINT
  sensitive = true
}

output "AZURE_KEY_VAULT_NAME" {
  value = module.keyvault.AZURE_KEY_VAULT_NAME
}

output "AZURE_LOCATION" {
  value = var.location
}

output "APPLICATIONINSIGHTS_CONNECTION_STRING" {
  value     = module.applicationinsights.APPLICATIONINSIGHTS_CONNECTION_STRING
  sensitive = true
}


output "SAP_CLOUD_SDK_API_URL" {
  value = module.api.URI
}

output "SAP_CLOUD_SDK_API_APPLICATIONINSIGHTS_CONNECTION_STRING" {
  value     = module.applicationinsights.APPLICATIONINSIGHTS_CONNECTION_STRING
  sensitive = true
}

