# CI/CD Setup via Azure Developer CLI

The compliance of the project to the Azure Developer CLI also gives you a head start when it comes to the setup of CI/CD. The CLI support two options for this:

1. GitHub Actions (default)
2. Azure DevOps

> [!NOTE]
> As for the basic deployment we kept the story line of accessing the SAP S/4HANA API via user name and password. This is reflected in the corresponding templates. We want to stress that his is not recommended for productive usage.

## GitHub Actions

The default configuration that we provide is the setup of a CI/CD pipeline via [GitHub Actions](https://docs.github.com/en/actions).

To start the setup you need to enter the command `azd pipeline config` in the root directory of the repository. This command also creates a *private* GitHub repository and pushes code to the new repo.

You must supply some the requested GitHub information and confirm that the code should be pushed to the new repository.

> [!NOTE]
> Be aware that there are limitations for GitHub Actions in private repositories which can cause [billing](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions). For trying things out it therefore makes sense to make the repository public.

The GitHub Action that serves as template is located in the repository as `.github/workflows/azure-dev.yml`. It contains the following code:

```yaml
on:
  workflow_dispatch:

# Remove comment of this section once you want to use the setup via GH Actions
#  push:
#    branches:
#      - main
#  pull_request:
#    branches:
#      - main

# https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure?tabs=azure-portal%2Clinux#set-up-azure-login-with-openid-connect-authentication

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install azd
        uses: Azure/setup-azd@v0.1.0

      - name: Install Nodejs
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Login az
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      - name: Set az account
        uses: azure/CLI@v1
        with:
          inlineScript: |
            az account set --subscription ${{vars.AZURE_SUBSCRIPTION_ID}}

      - name: Log in with Azure
        run: |
          $info = $Env:AZURE_CREDENTIALS | ConvertFrom-Json -AsHashtable;
          Write-Host "::add-mask::$($info.clientSecret)"

          azd auth login `
            --client-id "$($info.clientId)" `
            --client-secret "$($info.clientSecret)" `
            --tenant-id "$($info.tenantId)"
        shell: pwsh
        env:
          AZURE_CREDENTIALS: ${{ secrets.AZURE_CREDENTIALS }}

      - name: Azure Dev Provision
        run: azd provision --no-prompt
        env:
          AZURE_ENV_NAME: ${{ vars.AZURE_ENV_NAME }}
          AZURE_LOCATION: ${{ vars.AZURE_LOCATION }}
          AZURE_SUBSCRIPTION_ID: ${{ vars.AZURE_SUBSCRIPTION_ID }}
          ARM_TENANT_ID: ${{ vars.ARM_TENANT_ID }}
          ARM_CLIENT_ID: ${{ vars.ARM_CLIENT_ID }}
          ARM_CLIENT_SECRET: ${{ secrets.ARM_CLIENT_SECRET }}
          RS_RESOURCE_GROUP: ${{ vars.RS_RESOURCE_GROUP }}
          RS_STORAGE_ACCOUNT: ${{ vars.RS_STORAGE_ACCOUNT }}
          RS_CONTAINER_NAME: ${{ vars.RS_CONTAINER_NAME }}
          ODATA_URL: ${{ secrets.ODATA_URL }}
          ODATA_USERNAME: ${{ secrets.ODATA_USERNAME }}
          ODATA_USERPWD: ${{ secrets.ODATA_USERPWD }}
          APIKEY: ${{ secrets.APIKEY }}
          APIKEY_HEADERNAME: ${{ secrets.APIKEY_HEADERNAME }}

      - name: Azure Dev Deploy
        run: azd deploy --no-prompt
        env:
          AZURE_ENV_NAME: ${{ secrets.AZURE_ENV_NAME }}
          AZURE_LOCATION: ${{ secrets.AZURE_LOCATION }}
          AZURE_SUBSCRIPTION_ID: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
          ODATA_URL: ${{ secrets.ODATA_URL }}
          ODATA_USERNAME: ${{ secrets.ODATA_USERNAME }}
          ODATA_USERPWD: ${{ secrets.ODATA_USERPWD }}
          APIKEY: ${{ secrets.APIKEY }}
          APIKEY_HEADERNAME: ${{ secrets.APIKEY_HEADERNAME }}
```

Before you can run the action you must provide the `ODATA_URL` and authentication info (`ODATA_USERNAME`, `ODATA_USERPWD`, `APIKEY`) as secrets in your repository. You find more information about the procedure [here](https://docs.github.com/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository).
The values for the `AZURE_ENV_NAME`, the `AZURE_LOCATION` and the `AZURE_SUBSCRIPTION_ID` are automatically provided from your `azd` configuration you made when manually deploying the application e.g., via `azd up`.

We safeguarded the GitHub Action template with respect to the potential triggers of the workflow. By default you can only manually trigger the workflow due to the section:

```yaml
on:
  workflow_dispatch:
```

If you want to enable the execution also when pushing to the main branch or via pull requests to the main branch you must add the following triggers (as stated in the comment in the `yaml` file):

```yaml
on:
  workflow_dispatch:
  push:
   branches:
     - main
  pull_request:
   branches:
     - main
```

> [!NOTE]
> The provided workflow should serve as a first template. You probably want to adjust it as you maybe want to split the setup of the infrastructure from the deployment of the app.

You find more information on `azd` and GitHub Actions [here](https://learn.microsoft.com/azure/developer/azure-developer-cli/configure-devops-pipeline?tabs=GitHub).

## Azure DevOps

We provided the basic setup for Azure DevOps in the `.azdo` directory of the repository. However, we configured the app for the default process via GitHub Actions. Keep in mind to adjust the `azure.yaml` file with the following information:

```yaml
pipeline:
  provider: azdo
```

You find more information on `azd` and Azure DevOps [here](https://learn.microsoft.com/azure/developer/azure-developer-cli/configure-devops-pipeline?tabs=azdo).
