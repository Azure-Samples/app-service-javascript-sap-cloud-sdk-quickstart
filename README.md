# Project Name

Example project showcasing [SAP Cloud SDK for JavaScript](https://sap.github.io/cloud-sdk/docs/js/tutorials/getting-started/introduction) OData consumption running on Azure App Services. It uses the [Business Partner OData API](https://api.sap.com/api/OP_API_BUSINESS_PARTNER_SRV/overview) for SAP S4 as an example.

## Features

This project enables the feature scope of SAP's Cloud SDK for JavaScript with Azure PaaS apps.

> When deployed on Azure App Services instead of SAP Business Technology Platform, Cloud Foundry specific features like the destination service or xsuaa are not available.

* OData v2 and v4 + entity and client generator
* OpenAPI + client generator

## Getting Started

### Prerequisites & Installation

Follow the [SAP Cloud SDK documentation for JavaScript](https://sap.github.io/cloud-sdk/docs/js/tutorials/getting-started/introduction) for your project setup.

Use SAP's [public demo system ES5](https://developers.sap.com/tutorials/gateway-demo-signup.html), [SAP's mock server](https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html) or your own SAP system.

> Be aware that SAP's mock server is anticipating the S4 Cloud version of the Business Partner API. So, you need to adapt the mock server to your needs.

### Quickstart

1. git clone [repository clone url](https://github.com/Azure-Samples/app-service-javascript-sap-cloud-sdk-quickstart.git)
2. cd app-service-javascript-sap-cloud-sdk-quickstart
3. npm install
4. npm run start:dev
5. browse to [http://localhost:8080](http://localhost:8080) for your hello world
6. maintain your SAP OData url with credentials in `.env` file and restart the app if necessary
7. browse to [http://localhost:8080/business-partners](http://localhost:8080/business-partners) for your first OData call

## Deploy to Azure

There are multiple ways to deploy this project to Azure. In this example we use the [Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) for VS Code to deploy the project. Learn more about [this process on Microsoft learn](https://learn.microsoft.com/training/modules/create-publish-webapp-app-service-vs-code/5-exercise-publish-app-azure-app-service-vs-code?pivots=nodeexpress)

1. Create an Azure App Service with Node.js 18 LTS and Linux using the [VS Code extension for Azure](https://code.visualstudio.com/docs/azure/extensions) or use below button
2. Deploy to Web App from VS Code (right click in the explorer on the project folder and select "Deploy to Web App...")
3. Browse your new app powered by the SAP Cloud SDK (it takes a while the first time)
4. Maintain environment variables in the Azure App Service configuration

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](templates/azuredeploy.json)

## Resources

* [SAP Cloud SDK documentation for JavaScript](https://sap.github.io/cloud-sdk/docs/js/tutorials/getting-started/introduction)

* [.NET speaks OData too – how to implement Azure App Service with SAP Gateway](https://github.com/MartinPankraz/AzureSAPODataReader)
