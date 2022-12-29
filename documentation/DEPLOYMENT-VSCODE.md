# Deployment via VS Code Extension

In this example we use the [Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) for VS Code to deploy the project. Learn more about [this process on Microsoft learn](https://learn.microsoft.com/training/modules/create-publish-webapp-app-service-vs-code/5-exercise-publish-app-azure-app-service-vs-code?pivots=nodeexpress).

1. Create an Azure App Service with Node.js 18 LTS and Linux using the [VS Code extension for Azure](https://code.visualstudio.com/docs/azure/extensions) or use below button.
2. Maintain or upload environment variables in the [Azure App Service configuration](https://learn.microsoft.com/azure/app-service/configure-common?tabs=portal#configure-app-settings) - just like you did for the `.env` file for local execution in the previous section.
3. Deploy to Web App from VS Code or GitHub Codespaces (right click in the explorer on the project folder and select "Deploy to Web App...").
4. Browse your new app powered by the SAP Cloud SDK (it takes a while the first time).

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure-Samples%2Fapp-service-javascript-sap-cloud-sdk-quickstart%2Fmain%2Ftemplates%2Fazuredeploy.json)
