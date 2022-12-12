# SAP Cloud SDK on Azure App Service Quickstart

Example project showcasing [SAP Cloud SDK for JavaScript](https://sap.github.io/cloud-sdk/docs/js/tutorials/getting-started/introduction) OData consumption running on Azure App Services. It uses the [Business Partner OData API](https://api.sap.com/api/OP_API_BUSINESS_PARTNER_SRV/overview) for SAP S4 as an example.

## Features

Implementations using the approach described by this repos expand the feature scope of SAP's Cloud SDK for JavaScript to Azure PaaS apps.

> **Note**
> When deployed on Azure App Services instead of SAP Business Technology Platform, Cloud Foundry specific features like the destination service or xsuaa are not available.

* One code base to run on both Azure App Service and SAP Business Technology Platform
* Native Azure authentication with Azure AD without any coding effort
* Native Azure virtual network integration next to the SAP workload
* Enabled for SAP Private Link and Azure Private Link (depending on wether you use the SAP Business Technology Platform or Azure only)
* OData v2 and v4 + entity and client generator managed by SAP
* OpenAPI + client generator managed by SAP

## Getting Started

### Prerequisites & Installation

Follow the [SAP Cloud SDK documentation for JavaScript](https://sap.github.io/cloud-sdk/docs/js/tutorials/getting-started/introduction) for your project setup.

Use SAP's [public demo system ES5](https://developers.sap.com/tutorials/gateway-demo-signup.html), [SAP's mock server](https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html) or your own SAP system.

> **Note**
> Be aware that SAP's mock server is anticipating the S4 Cloud version of the Business Partner API. So, you need to adapt the mock server to your needs.

### Quickstart

0. Familiarize yourself with the [SAP Cloud SDK for JavaScript developer tutorial](https://sap.github.io/cloud-sdk/docs/js/tutorials/getting-started/introduction)
1. git clone [repository clone url](https://github.com/Azure-Samples/app-service-javascript-sap-cloud-sdk-quickstart.git)
2. cd app-service-javascript-sap-cloud-sdk-quickstart
3. npm install
4. npm run start:dev
5. browse to [http://localhost:8080](http://localhost:8080) for your hello world
6. maintain your SAP OData url with credentials in `.env` file and restart the app if necessary
7. browse to [http://localhost:8080/business-partners](http://localhost:8080/business-partners) for your first OData call and pick one of the business partners that have no address

> **Note**
> SAP's examples for the business partner API for S4 Cloud mentioned in the tutorial **differ** to the S4 on-premises flavor. Add AddressUsage, otherwise you will see "Internal error when calling operation module BUA_CHECK_ADDRESS_VALIDITY_ALL; a check table is missing". Check SAP KBA's for more details.

8. get that business partner by id: [http://localhost:8080/business-partners/1000020](http://localhost:8080/business-partners/1000020)
9. add an address to your chosen business partner: [http://localhost:8080/business-partners/1000020/address](http://localhost:8080/business-partners/1000020/address)

![screenshot of successful business partner address creation with request details](img/bupa-create-postman.png)

10. update the address with a house number: [http://localhost:8080/business-partner/1000092/address/33678](http://localhost:8080/business-partner/1000092/address/33678)

![screenshot of business partner address update with request details](img/bupa-update-postman.png)

11. delete the address: [http://localhost:8080/business-partner/1000092/address/33678](http://localhost:8080/business-partner/1000092/address/33678)

![screenshot of business partner address delete](img/bupa-delete-postman.png)

Congratulations🥳, you have successfully consumed SAP OData with the SAP Cloud SDK for JavaScript running on Azure App Service!

## Deploy to Azure

There are multiple ways to deploy this project to Azure. In this example we use the [Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) for VS Code to deploy the project. Learn more about [this process on Microsoft learn](https://learn.microsoft.com/training/modules/create-publish-webapp-app-service-vs-code/5-exercise-publish-app-azure-app-service-vs-code?pivots=nodeexpress)

1. Create an Azure App Service with Node.js 18 LTS and Linux using the [VS Code extension for Azure](https://code.visualstudio.com/docs/azure/extensions) or use below button
2. Maintain environment variables in the [Azure App Service configuration](https://learn.microsoft.com/azure/app-service/configure-common?tabs=portal#configure-app-settings)
3. Deploy to Web App from VS Code (right click in the explorer on the project folder and select "Deploy to Web App...")
4. Browse your new app powered by the SAP Cloud SDK (it takes a while the first time)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure-Samples%2Fapp-service-javascript-sap-cloud-sdk-quickstart%2Fmain%2Ftemplates%2Fazuredeploy.json)

## Authentication with Azure AD

[Configure](https://learn.microsoft.com/azure/app-service/configure-authentication-provider-aad) your App Service or Azure Functions app to use Azure AD login.

Consider SAP Principal Propagation for your authentication scenario. [Learn more](https://learn.microsoft.com/azure/api-management/sap-api#production-considerations)

## Connectivity to SAP backends and secure virtual network access

SAP backends on Azure typically run in fully isolated virtual networks. There are multiple ways to connect to them. Most popular ones are:

* Integrate your App Service with an Azure virtual network (VNet). [Learn more](https://learn.microsoft.com/azure/app-service/configure-vnet-integration-enable).
* Private Endpoints for Azure App Service. [Learn more](https://learn.microsoft.com/azure/app-service/networking/private-endpoint?source=recommendations)

VNet integration enables your app to securely access resources in your VNet, such as your SAP Gateway, but doesn't block public access to your App Service. To achieve full private connectivity for the app service too, look into private endpoints.

## Resources

* [SAP Cloud SDK documentation for JavaScript](https://sap.github.io/cloud-sdk/docs/js/tutorials/getting-started/introduction)

* [.NET speaks OData too – how to implement Azure App Service with SAP Gateway](https://github.com/MartinPankraz/AzureSAPODataReader)

* [Azure API Management policy for SAP Principal Propagation](https://github.com/Azure/api-management-policy-snippets/blob/master/examples/Request%20OAuth2%20access%20token%20from%20SAP%20using%20AAD%20JWT%20token.xml)
