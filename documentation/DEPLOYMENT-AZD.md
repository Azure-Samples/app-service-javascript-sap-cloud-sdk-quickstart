# Deployment via Azure Developer CLI

In this example we use the [Azure Developer CLI](https://github.com/Azure/azure-dev) to deploy the project. Learn more about [this tool on Microsoft learn](https://learn.microsoft.com/azure/developer/azure-developer-cli/overview)

1. Initialize and adjust your settings via `azd init` 
2. Deploy the infrastructure and your app via `azd up`
3. Browse your new app powered by the SAP Cloud SDK (it takes a while the first time)

If you want to separate the steps and have a closer look what is happing you can split the deployment via:

1. `azd provision` - this will exclusively set up your infrastructure
2. `azd deploy` - this will deploy your application to the provisioned infrastructure
