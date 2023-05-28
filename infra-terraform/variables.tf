variable "location" {
  description = "The supported Azure location where the resource deployed"
  type        = string
}

variable "environment_name" {
  description = "The name of the azd environment to be deployed"
  type        = string
}

variable "principal_id" {
  description = "The Id of the azd service principal to add to deployed keyvault access policies"
  type        = string
  default     = ""
}

// App specific parameters - provide the values via the main.parameters.json referencing e.g. environment parameters
variable "sku_name" {
  description = "The name of the SKU used to create the key vault"
  type        = string
  default     = "F1"
}

variable "health_check_path" {
  description = "The path to the health check endpoint"
  type        = string
  default     = "/health"
}


variable "oDataUrl" {
  description = "SAP OData service URL"
  type        = string
  default     = "https://sandbox.api.sap.com/s4hanacloud"
}

variable "oDataUsername" {
  description = "SAP OData user name"
  type        = string
  default     = ""
}

variable "oDataUserpwd" {
  description = "SAP OData user password"
  type        = string
  default     = ""
  sensitive   = true
}

variable "_APIKey" {
  description = "API Key"
  type        = string
  default     = ""
  sensitive   = true
}

variable "ApiKeyHeaderName" {
  description = "API Key Header Name"
  type        = string
  default     = "APIKey"
}

variable "useAPIM" {
  description = "Flag to use Azure API Management to mediate the calls between the Web frontend and the SAP backend API"
  type        = bool
  default     = false
}

variable "apimResourceGroupName" {
  description = "Resource Group containing the existing API Management instance"
  type        = string
  default     = "DEMO-NEU-SAP-PM1"
}

variable "apimServiceName" {
  description = "Name of the existing API Management instance"
  type        = string
  default     = "demo-sap-apim"
}

variable "apimApiSAPBackendURL" {
  description = "Target URL of the SAP backend API fronted by the existing API Management"
  type        = string
  default     = "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_BUSINESS_PARTNER"
}
