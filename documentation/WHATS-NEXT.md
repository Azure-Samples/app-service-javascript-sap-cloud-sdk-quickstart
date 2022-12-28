# What's next?

## Authentication with Azure AD 🔐

[Configure](https://learn.microsoft.com/azure/app-service/configure-authentication-provider-aad) your App Service or Azure Functions app to use Azure AD login. Use standard variable `X-MS-TOKEN-AAD-ACCESS-TOKEN` to retrieve the access token from the request header. [Learn more](https://learn.microsoft.com/azure/app-service/configure-authentication-oauth-tokens#retrieve-tokens-in-app-code)

Consider SAP Principal Propagation for your authentication scenario handled by [Azure API Management](https://learn.microsoft.com/azure/api-management/sap-api#production-considerations).

[Learn more](https://github.com/Azure/api-management-policy-snippets/blob/master/examples/Request%20OAuth2%20access%20token%20from%20SAP%20using%20AAD%20JWT%20token.xml)

## Connectivity to SAP backends and secure virtual network access 🔌

SAP backends on Azure typically run in fully isolated virtual networks. There are multiple ways to connect to them. Most popular ones are:

* Integrate your App Service with an Azure virtual network (VNet). [Learn more](https://learn.microsoft.com/azure/app-service/configure-vnet-integration-enable).
* Private Endpoints for Azure App Service. [Learn more](https://learn.microsoft.com/azure/app-service/networking/private-endpoint?source=recommendations)
* User Azure API Management for OData with SAP Principal Propagation. [Learn more](https://learn.microsoft.com/azure/api-management/sap-api#production-considerations)

VNet integration enables your app to securely access resources in your VNet, such as your SAP Gateway, but doesn't block public access to your App Service. To achieve full private connectivity for the app service too, look into private endpoints.

## Frontend 📱

You may consider SAP OpenUI5 for a seamless look and feel of your app when integrated with other SAP apps like [Fiori Launchpad](https://experience.sap.com/fiori-design-web/launchpad/) or similar. [Learn more](https://openui5.hana.ondemand.com/)

Alternatively frameworks like React, Angular, Pug or Vue.js are popular options to build a frontend for your app.

Another option would be hosting the frontend on SAP Business Technology Platform (BTP) and connect to your Azure App Service via [SAP Private Link](https://help.sap.com/docs/PRIVATE_LINK/42acd88cb4134ba2a7d3e0e62c9fe6cf/e9cc67716a3a41c9885862661e6c4234.html) or SAP Cloud Connector. When the Azure App Service is VNet integrated you may also use a public route if you wish. We would recommend fronting the app service with a web application firewall in such a case. [Azure Front Door](https://learn.microsoft.com/azure/frontdoor/quickstart-create-front-door) or [Azure Application Gateway](https://learn.microsoft.com/azure/app-service/networking/app-gateway-with-service-endpoints) are popular options.

## DevOps 👩🏾‍💻

* Consider activating GitHub Actions for your Azure project for out-of-the-box integrated CI/CD flows. [Learn more](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel)
* Explore cloud-native zero-downtime deployment styles like "[blue-green](https://learn.microsoft.com/azure/architecture/example-scenario/blue-green-spring/blue-green-spring)" with Azure App Service deployment slots. [Learn more](https://docs.microsoft.com/azure/app-service/deploy-staging-slots)

If you are using the Azure Developer CLI you can setup a prconfigured CI/CD pipeline for:

* GitHub Actions via `azd pipeline config`. You find more information on `azd` and GitHub Actions [here](https://learn.microsoft.com/azure/developer/azure-developer-cli/configure-devops-pipeline?tabs=GitHub).
* Azure DevOps which needs some additional configuration. You find more information on `azd` and Azure DevOps [here](https://learn.microsoft.com/azure/developer/azure-developer-cli/configure-devops-pipeline?tabs=azdo).
