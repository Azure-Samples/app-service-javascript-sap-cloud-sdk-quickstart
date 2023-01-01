# Deployment via Azure Developer CLI

In this example we use the [Azure Developer CLI](https://github.com/Azure/azure-dev) to deploy the project. Learn more about [this tool on Microsoft learn](https://learn.microsoft.com/azure/developer/azure-developer-cli/overview)

## Prerequisite

To use the Azure Developer CLI (`azd`) you need to have it available in your setup. If you are using the devcontainer defined in this repository or opened the repository via GitHub Codespaces you are ready to go.

If you yre not using one of these option you need to install the `azd` locally on "bare metal". You find the necessary steps you to execute in the documentation i.e., in the section ["Install the Azure Developer CLI"](https://learn.microsoft.com/azure/developer/azure-developer-cli/install-azd?tabs=baremetal%2Cwindows).

## Deployment

> **Note** - To follow along your local experience, the following steps assume that you access the OData API of the S/4HANA system via user name and password. This assumption is reflected in the parameterization of the infrastructure. While this is a valid approach to get things started, we discourage to use this setup in a productive scenario. Instead you should switch to a SAP Principal Propagation for your authentication scenario (see also ["What's next?"](./WHATS-NEXT.md))

### The easy way

The easiest way to deploy the necessary infrastructure and the application code via `azd` is:

*Step 1*: Key in one command: `azd up`.

*Step 2*: There is no step 2 😎

The `azd` CLI will ask you to provide the following information:

- Which environment do you want to use? This reflects already the idea of deploying to different environments (like dev, test or prod) with different parameterization.
- Which Azure subscription should be used for the deployment?
- Which region should be used for the deployment?

> **Note** - In case you are not logged into an Azure account, you also need to execute the login.

> **Note** - The parameters around the OData service are contained in the `.bicep` template i.e., in the `infra/main.bicep` file. You can provide them in different ways. The easiest way is to add them to the `infra/main.parameters.json` as references to environment variables in analogy to the already existing parameters available in the file. You can also add them after the deployment in the Azure Portal as we have defaulted them in the templates.  

After a successful deployment browse your new app powered by the SAP Cloud SDK (it takes a while the first time ☕).

### The two-step approach

The `azd up` command comprises two steps of the deployment:

1. Deployment of the infrastructure as defined in the `.bicep` files in the `infra` directory.
2. Deployment of the code given in the `src` folder.

To gain a bit more insight you can split your deployment accordingly via:

1. Execution of `azd provision`: this will exclusively set up your infrastructure.
2. Execution of `azd deploy`: this will deploy your application to the provisioned infrastructure.

The result after the two steps is the same as when executing `azd up`.

## What is happening behind the scenes?

After the deployment you will see that besides the Azure Web App (including the configuration of the application) several other resources have been created. This setup gives you a head start for a production grade setup.

### Monitoring

The basic setup an `azd`-compatible project comprises a monitoring setup. It consists of:

- [Application Insights](https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview?tabs=net)
- [Application Insights Dashboards](https://learn.microsoft.com/azure/azure-monitor/app/overview-dashboard)
- [Log Analytics](https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-overview)

The setup comes with three basic dashboards that you can access via the portal or via `azd` commands:

- Main dashboard: `azd monitor --overview`
- Live metrics dashboard: `azd monitor --live`
- Logs dashboard: `azd monitor --logs`

This gives you a solid starting point for monitoring your application as well as troubleshooting it.

### Security

A second corner stone of the `azd` setup is security. This comprises two aspects:

1. Access between the different resources is established via [managed identities](https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview) where applicable.
2. Setup of an [Azure Key Vault](https://learn.microsoft.com/azure/key-vault/general/overview).

For our quick start setup i.e. access  of the S/4HANA API via user name and password we stores the password as a secret in Azure Key Vault and referenced the secret in the application settings of the Azure Web App in the `/infra/main.bicep` file:

```bicep
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
    appSettings: {
      ODATA_URL: oDataUrl
      ODATA_USERNAME: oDataUsername 
      ODATA_USERPWD:  '@Microsoft.KeyVault(SecretUri=${keyVault.outputs.endpoint}secrets/${abbrs.keyVaultVaults}secret-odata-password)'
    }
  }
}
```

> **Note** - Azure Key Vault does not come with a free tier, so costs arise when using it.

If you want to get rid of the Azure Key Vault in your setup, remove the following modules from the `/infra/main.bicep` file:

```bicep
// Give the API access to KeyVault
module apiKeyVaultAccess './core/security/keyvault-access.bicep' = {
  name: 'api-keyvault-access'
  scope: rg
  params: {
    keyVaultName: keyVault.outputs.name
    principalId: api.outputs.SERVICE_API_IDENTITY_PRINCIPAL_ID
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
  name : 'odatapassword'
  scope: rg
  params: {
    name: '${abbrs.keyVaultVaults}secret-odata-password'
    keyVaultName: keyVault.outputs.name
    tags: tags
    secretValue: oDataUserpwd
  }
}
```

In addition remove the app setting referencing the Azure Key Vault as mentioned above.

> **Note** - Azure Key Vault is created by default with [soft delete](https://learn.microsoft.com/azure/key-vault/general/soft-delete-overview#soft-delete-behavior) enabled. So even after deleting the Azure Key Vault it is retained for a specified period (90 days by default) to avoid potential data loss. You can purge it as described [here](https://learn.microsoft.com/azure/key-vault/general/key-vault-recovery?tabs=azure-portal#list-recover-or-purge-a-soft-deleted-key-vault).

## How are the things wired together?

Deploying the infrastructure and the application via one command means that there needs to be a *manifest* file that describes where `azd` must check for the different resources. This files is the `azure.yaml` file in the root of the repository.

```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/Azure/azure-dev/main/schemas/v1.0/azure.yaml.json

name: app-service-javascript-sap-cloud-sdk-quickstart
metadata:
  template: app-service-javascript-sap-cloud-sdk-quickstart
services:
  sap-cloud-sdk-api:
    project: ./src/api
    language: ts
    host: appservice
```

This is the minimum setup of the file. It provides some metadata around the app and specifies which service needs to be deployed (`sap-cloud-sdk-api:`), where the source code is located (`project: ./src/api`), which language the code is written in (`language: ts`) and which host should be used for the app (`host: appservice`).

As you can see from the first line of the file, the manifest is backed by a language server with the schema located at <https://raw.githubusercontent.com/Azure/azure-dev/main/schemas/v1.0/azure.yaml.json>. Looking at the schema shows that other configurations are taken from the default namely:

- The location of the infrastructure as code files (default: `infra`), their language (default: `.bicep`) and the name of the default module within the Azure provisioning templates (default: `main`).
- The definition of continuous integration pipeline (default: `github`)

 Our setup follows those defaults and there no explicit configuration is necessary.

## Infrastructure as Code - alternatives

In our sample project we used `Bicep` to describe the Infrastructure as code. This is a convenient way when dealing with Azure resources. You find more about `Bicep` in the [official documentation](https://learn.microsoft.com/azure/azure-resource-manager/bicep/).

Besides `Bicep` the `azd` also supports the definition of the infrastructure via [Terraform](https://www.terraform.io/). This is not reflected in our sample repository but feel free to explore it as described [here](https://learn.microsoft.com/azure/developer/azure-developer-cli/use-terraform-for-azd).

## Cleanup

If you want to clean up your deployment execute the command `azd down` which will delete your deployment and your resources.

> **Note** - The CLI will ask for your confirmation to purge the key vault. You should do so if you want to permanently remove the Azure Key Vault.
