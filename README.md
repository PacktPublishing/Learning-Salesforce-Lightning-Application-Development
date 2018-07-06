# Learning-Salesforce-Lightning-Application-Development

## Requirements

Download  Salesforce CLI from https://developer.salesforce.com/tools/sfdxcli

## IDE Recommended

Use visualstudio code editor (https://code.visualstudio.com/)

Install SFDX Plugin from salesforce on VisualStudio Code(https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)

## Dev, Build and Test

### Autheticate to Devhub

Clone the current repository from git and CD into the project root

example cd chapter1

Authenticate to the DevHub using the below command  

```console
$ sfdx force:auth:web:login -d -a DevHub
```

Set your Devhub as default Dev hub globally .You will need to knpw your Devhub Username/alias for this

```console
$ sfdx force:config:set defaultdevhubusername=DevHub -g
```

### Create a scratch ORG 

```console
    ## create a scratch org for this branch . Total of 30 days for the scratch org created
    sfdx force:org:create -s -f config/project-scratch-def.json -d 30 -a scratch_org;

    ## set as default scratch org
    sfdx force:config:set defaultusername=scratch_org;

    ## push local code artifacts to scratch org
    sfdx force:source:push;

    ## open scratch org
    sfdx force:org:open
```


### Push source from local folder to the scratch org

```console
$ sfdx force:source:push
```
### Pull source from scratch org to the local folder

If you are doing any dev in scratch org including config and set up you can pull in your local src folder using below

```console
$ sfdx force:source:pull
```

### Convert SFDX format to metadata for Deployment To Dev orgs

For this one will have to first authenticate to the Dev org where the Source Code will be deployed

Run the below command for authenticating to Devorg

```console
$ sfdx force:auth:web:login -d -a Devorg
```

Once authenticated to push the source code to the Devorg run the below command.

The below converts the source to the Metadata API format from DX source format

```console
$ sfdx force:source:convert  -d mdapi_output_dir
```

Deploy the code to the Devorg

```console
$ sfdx force:mdapi:deploy --deploydir mdapi_output_dir -u Devorg -w 3 --testlevel RunAllTestsInOrg
```

### Deleting a scratch org

Your scratch can be available for 30 days and there is no need for them to delete .However if you have too many scratch orgs and running out of limits you can delete it using the below command . You will need username or the alias .

```console
$ sfdx force:org:delete -u <username/alias>
```

## Resources

CLI reference Guide (https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

SFDX Developer Guide

https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop.htm

## Description of Files and Directories


## Issues

### 1 . ERROR:  entity type cannot be inserted: Scratch Org Info.

This is because your user in the DevHub org does not have the DevHub Permission set assigned .Request your salesforce admin to give you access to this permission set in your DevHub org .
