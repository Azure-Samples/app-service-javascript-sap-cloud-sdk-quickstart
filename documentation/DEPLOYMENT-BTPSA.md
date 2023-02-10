# Deployment via the btp setup automator

## Setup

For the basic setup you have the following options depending on your preferences:

- Start the pre-configured GitHub Codespace with the btp setup automator Docker image
- Use the devcontainer with the btp setup automator Docker image
- Run the prebuild Docker image of the  btp setup automator locally via `docker container run --rm -it --name "btp-setup-automator" "ghcr.io/sap-samples/btp-setup-automator:latest"`

## Configuration

Fill the following data in the `parameters.json` file:

- Id of your SAP BTP global account as value for the key `"globalaccount"`
- The Email of your useras value for the key `"myemail"`
- The password of your useras value for the key `"mypassword"`

For the local setup:

- Copy the `parameters.json` and the `usecase.json` file into the container

## Execution

```bash
docker exec -i --workdir "/home/user/" "btp-setup-automator" ./btpsa \
    -parameterfile "home/user/infra-btpsa/parameters.json" 
```

## Cleanup

In oder to cleanup the setup you must set the parameter `prunesubaccount` in the file `infra-btpsa/parameters.json` to true and execute the btp setup automator again using the command:

```bash
```

Alternatively you can replace the parameter `prunesubaccount` with the parameter `pruneusecase` and set this parameter to `true`. In this case the complete content of the SAP BTP subaccount will be removed, but the SAP BTP subaccount *per se* remains untouched.

## More Information

You find more information about the btp setup automator and its capabilities in the repository <https://github.com/SAP-samples/btp-setup-automator> on GitHub.
