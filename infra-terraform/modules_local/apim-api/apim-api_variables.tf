variable "name" {
  description = "The name of the API Management Service"
  type        = string
}

variable "rg_name_apim" {
  description = "The name of the resource group of the API management"
  type        = string
}

variable "rg_name_app" {
  description = "The name of the resource group of the application"
  type        = string
}

variable "api_name" {
  description = "Resource name to uniquely identify this API within the API Management service instance"
  type        = string
}

variable "api_display_name" {

  description = "The Display Name of the API"
  type        = string
}

variable "api_path" {
  description = "Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API."
  type        = string
}

variable "api_backend_url" {
  description = "Absolute URL of the backend service implementing this API."
  type        = string
}

variable "application_insights_name" {
  description = "Azure Application Insights Name."
  type        = string
}

variable "api_app_name" {
  description = "Resource name for backend Web App or Function App"
  type        = string
  default     = ""
}
