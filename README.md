# Learning Salesforce Lightning Application Development

![b05909_mockupcovernew](https://user-images.githubusercontent.com/2276156/43361728-b3dfd95c-92a5-11e8-955d-94910efb9348.png)

## Requirements

Download  Salesforce CLI from https://developer.salesforce.com/tools/sfdxcli

## IDE Recommended

Use visualstudio code editor (https://code.visualstudio.com/)

Install SFDX Plugin from salesforce on VisualStudio Code(https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)

## Dev, Build and Test

Clone the current repository from git and CD into the project root

Example to push all code from chapter 1 to scratch org start by changing directory using ```cd chapter1``` and then following below commands

### Autheticate to Devhub

Authenticate to the DevHub using the below command  

```console
$ sfdx force:auth:web:login -d -a DevHub
```

Set your Devhub as default Dev hub globally .You will need to knpw your Devhub Username/alias for this

```console
$ sfdx force:config:set defaultdevhubusername=DevHub -g
```

### Create a scratch org

```console
## create a scratch org for this branch . Total of 30 days for the scratch org created
$ sfdx force:org:create -s -f config/project-scratch-def.json -d 30 -a scratch_org
```


### Set default scratch org
```console
$ sfdx force:config:set defaultusername=scratch_org
```

### Push local code artifacts to scratch org
```console 
$ sfdx force:source:push
```
### Open scratch org
```console
$ sfdx force:org:open
```

### Push source from local folder to the scratch org if local file changes

```console
$ sfdx force:source:push
```
### Pull source from scratch org to the local folder if you make any code and config changes in scratch org

If you are doing any dev in scratch org including config and set up you can pull in your local src folder using below

```console
$ sfdx force:source:pull
```

### Convert SFDX format to metadata for Deployment To Dev orgs(Non Scratch orgs)

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

### Open Current Directory in VSCode Editor

```console
$ code .
```


## Resources

CLI reference Guide (https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

SFDX Developer Guide

https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop.htm

## Description of Files and Directories


## Issues

### 1 . ERROR:  entity type cannot be inserted: Scratch Org Info.

This is because your user in the DevHub org does not have the DevHub Permission set assigned .Request your salesforce admin to give you access to this permission set in your DevHub org .

# Learning Salesforce Lightning Application Development

<a href="https://www.packtpub.com/application-development/learning-salesforce-lightning-application-development?utm_source=github&utm_medium=repository&utm_campaign=9781787124677"><img src="https://user-images.githubusercontent.com/2276156/43361728-b3dfd95c-92a5-11e8-955d-94910efb9348.png" alt="Learning Salesforce Lightning Application Development
" height="256px" align="right"></a>

This is the code repository for [Learning Salesforce Lightning Application Development
](https://www.packtpub.com/application-development/learning-salesforce-lightning-application-development?utm_source=github&utm_medium=repository&utm_campaign=9781787124677), published by Packt.

**Build and test Lightning Components for Salesforce Lightning Experience using Salesforce DX**

## What is this book about?

Built on the Salesforce App Cloud, the new Salesforce Lightning Experience combines three major components: Lightning Design System, Lightning App Builder, and Lightning Components to provide an enhanced User experience. This book will enable you to quickly create modern, enterprise apps with Lightning Component Framework.

This book covers the following exciting features:
* Understand Lightning component architecture
* Learn Locker security best practices
* Debug and Improve performance of your Lightning components
* Use third party libraries along with the component framework
* Learn how to publish Lightning components on AppExchange

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1788396235) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The code will look like the following:
```
function StringUtils() {};

StringUtils.prototype.concatenate = function(str1,str2) {
  return str1.concat(str2);
};

StringUtils.prototype.camelcase = function(string) {
  string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function(match) {
      return match.charAt(match.length-1).toUpperCase();
  });
  return string.charAt(0).toLowerCase() + string.substring(1);
};
```

**Target Audience for the Book:**
The target audience for this book includes beginner, intermediate, and advanced Salesforce
developers and architects who want to fully understand the capabilities of the Lightning
Components Framework and learn about application development on the Salesforce
platform.
This book can also be used by JavaScript frontend developers who are familiar with
JavaScript and want to understand the capabilities and boundaries of the Lightning
Components Framework. The book also covers the integration capabilities of the
framework with other open source JavaScript libraries and how to take Lightning
components built on the platform to outside world.

### Software and Hardware List

| Chapter  | Software required                   |      OS required    |                
| -------- | ------------------------------------| -------------------------------
| 1        | SFDX CLI                            | macOS/Windows/Linux |               
| 2        | VisualStudio Code Editor            | macOS/Windows/Linux |                          
| 3        | SalesforceDX Plugin for VS Code     | macOS/Windows/Linux |   
| 4        | Chrome browser                      | macOS/Windows/Linux |
| 5        | Same as above                       | Same as above       |


We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://www.packtpub.com/sites/default/files/downloads/LearningSalesforceLightningApplicationDevelopment_ColorImages.pdf).

### Related products
* Learning Salesforce Einstein [[Packt]](https://www.packtpub.com/big-data-and-business-intelligence/learning-salesforce-einstein?utm_source=github&utm_medium=repository&utm_campaign=9781787126893) [[Amazon]](https://www.amazon.com/dp/1787126897)

* Salesforce Lightning Reporting and Dashboards [[Packt]](https://www.packtpub.com/application-development/salesforce-lightning-reporting-and-dashboards?utm_source=github&utm_medium=repository&utm_campaign=9781788297387) [[Amazon]](https://www.amazon.com/dp/1788297385)


## Get to Know the Author
**Mohith Shrivastava** has been building and architecting Salesforce applications since 2011, when he graduated from the National Institute of Engineering, Mysore.
He is currently a Salesforce MVP and holds multiple Salesforce certifications. He is an active contributor on Salesforce Stack Exchange Community. Mohith has authored Learning Salesforce Einstein and Salesforce Essentials for Administrators for Packt publishing. In his leisure time, he loves exploring the latest technologies and spending time with his family.



## Other books by the authors
* [Salesforce Essentials for Administrators](https://www.packtpub.com/big-data-and-business-intelligence/salesforce-essentials-administrators?utm_source=github&utm_medium=repository&utm_campaign=9781784398071)


### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.

