# Deployment via the btp setup automator

> **Note** - We provide the workspace "workspaces/btpsa.code-workspace" for you to focus on the files and folders relevant for the SAP BTP setup.

## Setup

There are different options to start the *btp setup automator* (btpsa). For this quickstarter we assume that you are using VS Code and have a Docker daemon up and running locally.

> **Note** - The provided Docker image of the btpsa can not be integrated into GitHub Codespaces or devcontainers without a bigger refactoring. We therefore focus on the local setup.

To use the *btp setup automator* (btpsa) you must spin up the Docker image provided in the [btpsa repository](https://github.com/SAP-samples/btp-setup-automator). Make sure that Docker is running and execute the following steps:

1. Clone the repository in a folder of your choice:

   ```bash
   git clone https://github.com/SAP-samples/btp-setup-automator.git <your target folder>
   ```

2. Switch into the folder with the cloned sources and start the Docker Image of the btpsa with the following command:

   - MacOs/Linux: `./run RunReleaseFromRegistry`
   - Windows (PowerShell): `.\run.ps1 -RunReleaseFromRegistry $True`

3. Check that the Docker container is up and running. Switch to VS Code, open the command palette (Windows: Ctrl+Shift+P ; Mac: Cmd+Shift+P) and select the Remote Containers: Attach to Running Container... command
4. Select the `btp-setup-automator` container
5. A new VS Code Window opens inside the btpsa Docker container and ready to setup the infrastructure on and deploy your app to SAP BTP.

## Configuration

### Filling the gaps

We provide the necessary configuration for the btpsa in the folder `infra-btpsa` of the *quickstarter repository*. You find two files in this folder:

- The `parameters.json` file containing the basic configuration of the setup like ID of the global account
- The `usecase.json` file containing the scenario specific configuration like which services should be instantiated on SAP BTP.

> **Note** - You do not need to care about entitling the services and apps to the subaccount, this is done automatically by the btpsa.

To make the setup work you must fill in your account information into the `parameters.json` file:

- Id of your SAP BTP global account as value for the key `"globalaccount"`
- The Email of your user as value for the key `"myemail"`

You have different options to authenticate defined via the ke `"loginmethod"` in the `parameters.json` file:

- Basic authentication: specify the value `"basicAuthentication"` as `"loginmethod"` (default).
- Single sign-on: : specify the value `"sso"` as `"loginmethod"`.
- Provide the data for basic authentication via environment variables: specify the value `"envVariables"` as `"loginmethod"`.

When choosing basic authentication you can provide the password either in the `parameters.json` file via the key `"mypassword"` or leave it empty. If you leave it empty you will be queried for the password in the console.

If you are using environment variables make sure that a environment variables for the keys `mykeys` and `mypassword` are set **in the container**.

### Copying the data

We need the configuration in the Docker container. The easiest way is to copy the `parameters.json` and the `usecase.json` file to the root directory in the btpsa container using the copy&paste functionality of VS Code.

With that you are ready to go to start the setup.

### Start the btpsa

Open a terminal in the container by opening one in the VS Code that is attached to the running container. Enter the following command:

```zsh
./btpsa
```

> **Note** - If you started from Windows make sure that the end of line sequence of the file `btpsa` is set to `LF`.

The script will now setup your account and deploy the app

## Steps in detail

The provided btpsa configuration executes the following steps defined in the `usecase.json`:

1. The tool first checks if the global account is capable to create the services. If this is not the case an error is raised.
2. The subaccount is created and the necessary entitlements of the subaccount are executed.
3. The Cloud Foundry environment including the space as well as the services are created
4. After a successful setup fo the services, btpsa executes the scripted steps in the section `executeAfterAccountSetup"` of the `usecase.json` file:
   - Clone the quickstarter GitHub repository into the Container
   - Executing the mta-build of the project (yes you do not need to install any further tools locally)
   - Deploying the built `mtar` file into the Cloud Foundry space 

> **Note** - Not everything can be setup fully automatically, like the Private Link Service. To lower the entry barrier we entitle the service, so you already have a decent starting point.

## Cleanup

In oder to cleanup the setup you must set the parameter `prunesubaccount` in the file `infra-btpsa/parameters.json` to true and execute the btp setup automator again using the command:

```bash
./btpsa
```

Alternatively you can replace the parameter `prunesubaccount` with the parameter `pruneusecase` and set this parameter to `true`. In this case the complete content of the SAP BTP subaccount will be removed, but the SAP BTP subaccount *per se* remains untouched.

## More Information

You find more information about the btp setup automator and its capabilities in the repository <https://github.com/SAP-samples/btp-setup-automator> on GitHub.
