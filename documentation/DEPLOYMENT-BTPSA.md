# Deployment via the btp setup automator

> **Note** - The `btpsa` does not support SAP BTP Trial.

## Prerequisite

We provide the workspace `workspaces/btpsa.code-workspace` for you to focus on the files and folders relevant for the SAP BTP setup. To make your flow as smooth as possible we also provide a dev container that spins up the `btp setup automator` (`btpsa`). The dev container is named "BTP Setup Automator (Stable)". You can also use the configuration for a GitHub Codespace.

> **Note** - Be aware that depending on your login flow there might be issues when it comes to [forwarded ports](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) depending on your organizational settings.

## Setup

We assume you are using either the dev container or GitHub Codespaces to get things going. There are further options to start the `btpsa` but we will not go into the details of them here. You find more information in the `btpsa` documentation [here](https://github.com/SAP-samples/btp-setup-automator/blob/main/docs/BASIC_SETUP.md).

### Configuration

We provide the necessary configuration for the `btpsa` via two files:

- The `parameters.json` file containing the basic configuration of the setup like ID of the global account
- The `usecase.json` file containing the scenario specific configuration like which services should be instantiated on SAP BTP.

> **Note** - You find these files also in the folder `infra-btpsa` of the *quickstarter repository*

To make the setup work you must fill in your account information into the `parameters.json` file:

- ID of your SAP BTP global account as value for the key `"globalaccount"`
- The email of your user as value for the key `"myemail"`

You have different options to authenticate defined via the ke `"loginmethod"` in the `parameters.json` file:

- Basic authentication: specify the value `"basicAuthentication"` as `"loginmethod"` (default).
- Single sign-on: : specify the value `"sso"` as `"loginmethod"`.
- Provide the data for basic authentication via environment variables: specify the value `"envVariables"` as `"loginmethod"`.

When choosing basic authentication you can provide the password either in the `parameters.json` file via the key `"mypassword"` or leave it empty. If you leave it empty you will be queried for the password in the console.

If you are using environment variables make sure that a environment variables for the keys `mykeys` and `mypassword` are set **in the container**.

> **Note** - You do not need to care about entitling the services and apps to the subaccount, this is done automatically by the btpsa.

> **Note** - In case you want to work with already existing subaccounts and/or service instances, you must adjust the corresponding names in the `parameters.json` and/or `usecase.json` files to match the existing ones. `btpsa` will consider these and not create or recreate them.

With this information you are ready to go.

### Start the btpsa

Open a terminal in the container and enter the following command:

```ash
./btpsa
```

The script will now setup your account and deploy the app

## Steps in detail

The provided btpsa configuration executes the following steps defined in the `usecase.json`:

1. The tool first checks if the global account is capable to create the services. If this is not the case an error is raised.
2. The subaccount is created and the necessary entitlements of the subaccount are executed.
3. The Cloud Foundry environment including the space as well as the services are created
4. After a successful setup fo the services, btpsa executes the scripted steps in the section `executeAfterAccountSetup"` of the `usecase.json` file:
   - Clone the quickstarter GitHub repository into the Container
   - Executing the nest-build of the project (yes you do not need to install any further tools locally)
   - Deploying the app via ´cf push´ into the Cloud Foundry space 

> **Note** - Not everything can be setup fully automatically, like the Private Link Service. To lower the entry barrier we entitle the service, so you already have a decent starting point.

## Cleanup

In oder to cleanup the setup you must set the parameter `prunesubaccount` in the file `infra-btpsa/parameters.json` to true and execute the btp setup automator again using the command:

```bash
./btpsa
```

Alternatively you can replace the parameter `prunesubaccount` with the parameter `pruneusecase` and set this parameter to `true`. In this case the complete content of the SAP BTP subaccount will be removed, but the SAP BTP subaccount *per se* remains untouched.

## More Information

You find more information about the btp setup automator and its capabilities in the repository <https://github.com/SAP-samples/btp-setup-automator> on GitHub.
