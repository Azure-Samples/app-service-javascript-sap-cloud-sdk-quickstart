# Infrastructure Deployment via Azure Developer CLI for Terraform

> **Warning** - with release 0.8.0-beta.1 of `azd` [feature stages](https://devblogs.microsoft.com/azure-sdk/azd-april-2023-release/#alpha-beta-and-stable-features) have been introduced. This provides insights into the maturity of the `azd` functionality. The provisioning of infrastructure via Terraform has been marked as an *alpha* feature, so it is not yet recommended for productive usage.

> **Note** - there are known issues when using the Terraform provider in combination with GitHub Codespaces i.e., the login flow via the Azure CLI gets stuck in the callback. You find the details in this [issue](https://github.com/Azure/azure-dev/pull/1497) of the `azd` repository as well as in this [issue](https://github.com/Azure/azure-dev/pull/1496) in the Azure CLI repository. The described workaround in the second issue did not do the trick for us. Hence, we currently cannot support GitHub Codespaces in this type of infrastructure setup.

## Prerequisite

To use the Azure Developer CLI (`azd`) you need to have it available in your setup. If you are using the dev container "Azure Developer CLI (Terraform)" defined in this repository or opened the repository via GitHub Codespaces you are ready to go. We activated Terraform as alpha feature in the dev container.

If you execute the `azd` commands locally, make sure that you have activated the alpha features via `azd config set alpha.terraform on`.

## Deployment with Terraform

The basic steps of using `azd` to setup remain unchanged as described [here](./DEPLOYMENT-AZD.md). There are three spots that differ from a technical perspective, namely:

* The login flow via Azure CLI
* The specification of Terraform as IaC in the `azure.yaml` manifest.
* The definition of the infrastructure via Terraform files and modules

In the following sections describe the points that need to be taken in to account if you want to use Terraform.

### The login flow

To deploy the infrastructure via Terraform `azd` uses the [Azure Terraform Provider](https://github.com/hashicorp/terraform-provider-azurerm) under the hood. This provider (not `azd`) is using the Azure CLI login flow. As a consequence when using Terraform you must enforce `azd` to make use of this flow:

* Configure `azd` to make use of the Azure CLI via the command `azd config set auth.useAzCliAuth true`.
* If you are using the `devcontainer` or GitHub Codespaces, make that you open the devcontainer "Azure Developer CLI (Terraform)" that contains all necessary prerequisites.

### Adjustment of manifest

The main file configuring the behavior of `azd` is the `azure.yml` file in the root repository. In order to make use of Terraform we must change it to use it for the infrastructure deployment as the default is bicep. To achieve this add the following section to the file to specify the infrastructure *provider* as well as the *path* to the Terraform files:

```yaml
infra:
  provider: terraform
  path: ./infra-terraform
```

> **Note** - The default path is `infra`. As we already have our `.bicep` resources defined there, we use a different path that we have to explicitly specify in the manifest.

> **Note** Probably due to the nature of an alpha feature the JSON schema backing the `azure.yaml` file does not contain `terraform` as a valid value for the `provider` key. As this behavior is confusing we opened an issue for that (see [[Issue] Azure.yaml - terraform is not a valid value](https://github.com/Azure/azure-dev/issues/1925)).

### Infrastructure setup

The Terraform files are located in the `infra-terraform` folder. As you can see the structure contains the modules provided by the `azd` team containing the Terraform modules that represent the core building blocks of your application. These modules are use in the `main.tf` file to define the setup of our app.

In the following section we present the single files of the Terraform-based setup:

#### The "provider.tf" file

This files defines what Terraform provider should be usd in order to do the setup. In addition the provider features for how to handle the purging of an Azure Key Vault as well as how deal with non-empty Resource Groups are defined in this file.

#### The "variables.tf" file

This files defines the input variables for the `main.tf` file. They can be seen like function arguments and are used in the setup of the infrastructure to e.g., provide the value for a specific resource configuration.

Here we also placed our quickstarter specific variables that define the access to SAP system's OData services.

#### The "output.tf" file

This file defines the output of the provisioning e.g., the URL endpoint of the application. The values correspond to function return values. They will be displayed in the CLI output when the provisioning was successfully executed.

#### The "main.tfvars.json" file

This files is the so called **variable definitions**  file. This is one way to set the input variables defined in the `variables.tf`.

#### The "main.tf" file

This file is the core of the Terraform infrastructure configuration. Here we define the infrastructure setup of our application by combining the different building blocks provided via the Terraform modules. One example is the configuration of the module to provision the Azure App Service:

```tf
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
```

As you can see we use the variables defined in the `variables.tf` file to configure e.g., the app settings. The components are basically the same as in the Bicep flow, so we do not repeat them in detail here.

## Mind the differences

The Terraform-based setup in the `azd` was introduced a later than the one using Bicep. Due to that and due to the differences between them, some things work differently. Here are two things that we think are worth to mention.

### Purging of Azure Key Vault

When using Bicep to provide your infrastructure you get asked by the CLI if you want to purge you Azure Key Vault when deprovisioning your infrastructure. This is not the case when using Terraform. If you want to make sure that the Key Vault is purged when deprovisioning your infrastructure you must make an adjustment in the `provider.tf` file namely you must set the `purge_soft_delete_on_destroy` to `false`:

```tf
key_vault {
      purge_soft_delete_on_destroy = false
    }
```

The purging is automatically done once you delete your infrastructure.

> **Note** - We do not recommend the automatic purging of the Azure Key Vault in a productive environment

### Changes in the appservicenode module

In order to enable you to deploy the Azure App Service in the SKU `F1` i.e., the free plan, we had to adjust some modules delivered by the `azd` team. One parameter available in the Bicep variant is missing in the Terraform setup, namely the `site configuration` `always_on`. This is set to `true` which prevents the deployment to a free plan. To enable this we made the following adjustments:

1. Introduction of the parameter as a variable in the `infra-terraform\modules\appservicenode\appservicenode_variables.tf`

  ```tf
  variable "always_on" {
    description = "The always on setting for the app service."
    type        = bool
    default     = true
  }
  ```

2. Exchanging the hard-coded value for the parameter with the newly defined variable in the `infra-terraform/modules/appservicenode/appservicenode.tf`file:

  ```tf
  resource "azurerm_linux_web_app" "web" {
    name                = azurecaf_name.web_name.result
    location            = var.location
    resource_group_name = var.rg_name
    service_plan_id     = var.appservice_plan_id
    https_only          = true
    tags                = var.tags
  
    site_config {
      always_on        = var.always_on
      ftps_state       = "FtpsOnly"
      app_command_line = var.app_command_line
      application_stack {
        node_version = var.node_version
      }
    }
  ```

With these changes we were able to set the variable in the definition of the Azure App Service in the `main.tf` file.

## More information

You find more information about `azd` and Terraform [here](https://learn.microsoft.com/azure/developer/azure-developer-cli/use-terraform-for-azd).
