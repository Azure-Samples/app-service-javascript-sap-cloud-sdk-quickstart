# Infrastructure Deployment via Azure Developer CLI for Terraform

The basic steps of using `azd` to setup remain unchanged as described [here](./DEPLOYMENT-AZD.md). There are only two spots that differ from a technical perspective, namely:

* The specification of Terraform as IaC in the `azure.yaml` manifest.
* The definition of the infrastructure via Terraform files and modules

In the following sections describe the points that need to be taken in to account if you want to use Teraform. 

## Adjustment of manifest

The main file configuring the behavior of `azd` is the `azure.yml` file in the root repository. In order to make use of Terraform we must change it to use it for the infrastructure deployment as the default is bicep. To achieve this add the following section to the file to specify the infrastructure *provider* as well as the *path* to the Terraform files:

```yaml
infra:
  provider: terraform
  path: ./infra-terraform
```

> **Note** - The deafult path is `infra`. As we already have our `.bicep` resources defined there, we use a different path that we have to explicitly specify in the manifest.

## Infrastructure setup

The Terraform files are located in the `infra-terraform` folder.

TODO - Add relevant components
 
## More information


You find more information about `azd` and Terraform [here](https://learn.microsoft.com/azure/developer/azure-developer-cli/use-terraform-for-azd).

