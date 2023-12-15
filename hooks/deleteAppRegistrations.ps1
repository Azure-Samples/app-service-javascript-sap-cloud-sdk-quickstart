#!/bin/bash

# This script is part of the sample's workflow for configuring App Registrations
# in Azure AD and saving the appropriate values in Key Vault, and Azure App Config Service
# so that the application can authenticate users. Note that an app registration is
# something you'll want to set up once, and reuse for every version of the web app
# that you deploy. You can learn more about app registrations at
# https://learn.microsoft.com/en-us/azure/active-directory/develop/application-model
#
# If you do not have permission to create App Registrations consider
# sharing this script, or something similar, with your administrators to help them
# set up the variables you need to integrate with Azure AD
#
# This code may be repurposed for your scenario as desired
# but is not covered by the guidance in this content.

# Using Azure CLI command to create an app registration on Entra ID: https://learn.microsoft.com/cli/azure/ad/app?view=azure-cli-latest
if ($env:USE_EntraIDAuthentication -eq "false") {

    Write-Output "Skipping app registration delete because USE_EntraIDAuthentication is set to false"
    exit 0

}

Write-Output "Deleting app registration for web app using object id"

# Get Object ID of app registration

###### Figure out how to get the object id of the app registration when AZD clears the .ENV file before this script runs
#$APP_METADATA = az ad app list --display-name $env:WEB_APP_NAME | ConvertFrom-Json
#$OBJECT_ID = $APP_METADATA.id
#az ad app delete --id $OBJECT_ID

# all done
exit 0