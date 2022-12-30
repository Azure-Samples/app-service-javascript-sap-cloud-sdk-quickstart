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

1. execution of `azd provision`: this will exclusively set up your infrastructure.
2. execution of `azd deploy`: this will deploy your application to the provisioned infrastructure.

The result after the two steps is the same as when executing `azd up`.

## What is happening behind the scenes?

After the deployment you will see that besides the Azure Web App including the configuration of the application several other resources are created that give you a head start for a production grade setup.

### Monitoring

The basic setup an `azd`-compatible project comprises a monitoring setup via [Application Insights](https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview?tabs=net)

### Security

## How are the things wired together?

## Infrastructure as Code

In our sample project we used `Bicep` to describe the Infrastructure as code. This is a convenient way when dealing with Azure resources. You find more about `Bicep` in the [official documentation](https://learn.microsoft.com/azure/azure-resource-manager/bicep/).

Besides `Bicep` the `azd` also supports the definition of the infrastructure via [Terraform](https://www.terraform.io/). This is not reflected in our sample repository but feel free to explore it as described [here](https://learn.microsoft.com/azure/developer/azure-developer-cli/use-terraform-for-azd).

## Cleanup

If you want to clean up your deployment execute the command `azd down` which will delete your deployment and your resources.
