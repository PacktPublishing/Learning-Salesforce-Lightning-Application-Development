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

<a href="https://www.packtpub.com/application-development/learning-salesforce-lightning-application-development?utm_source=github&utm_medium=repository&utm_campaign=9781787124677"><img src="https://www.packtpub.com/application-development/learning-salesforce-lightning-application-development?utm_source=github&utm_medium=repository&utm_campaign=9781787124677" alt="Learning Salesforce Lightning Application Development
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

**Following is what you need for this book:**
The ideal target audience for this book would be people eager to learn React Native and who already know the basics of JavaScript. We can assume that the target audience already knows how to write Hello World in JavaScript and know what are the functions, recursive functions, JavaScript types and loops.
With the following  software and hardware list you can runt all the code file present in the book (Chapter 1-15)

### Software and Hardware List

| Chapter  | Software required                   | OS required                        |        |         
| -------- | ------------------------------------| -----------------------------------|-----------------------------------|
| 1     | SFDX CLI downloaded from https://developer.salesforce.com/tools/sfdxcli | macOS/Windows/Linux                   |  
| 2     | VisualStudio Code Editor download from https://code.visualstudio.com/   | macOS/Windows/Linux                   |             | 3     | SalesforceDX Plugin for VS Code https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode |       macOS/Windows/Linux |                                                                                                                   
| 4     | Chrome browser                          | macOS/Windows/Linux |
| 5     | Same as above                           | Same as above       |


We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://www.packtpub.com/sites/default/files/downloads/Unity2018ShadersandEffectsCookbookThirdEdition_ColorImages.pdf).

### Related products
* Getting Started with Unity 2018 - Third Edition [[Packt]](https://www.packtpub.com/game-development/getting-started-unity-2018-third-edition?utm_source=github&utm_medium=repository&utm_campaign=9781788830102) [[Amazon]](https://www.amazon.com/dp/1788830105)

* Unity Virtual Reality Projects - Second Edition [[Packt]](https://www.packtpub.com/game-development/unity-virtual-reality-projects-second-edition?utm_source=github&utm_medium=repository&utm_campaign=9781788478809) [[Amazon]](https://www.amazon.com/dp/1788478800)

## Get to Know the Authors
**John P. Doran** is a passionate and seasoned technical game designer, software engineer, and author who is based in Redmond, Washington.
For over a decade, John has built games in roles ranging from game designer to lead UI programmer. Additionally, John has taught game development in Singapore, South Korea, and the United States. To date, he has authored over 10 books pertaining to game development.

**Alan Zucconi** is a passionate developer, author, and lecturer, recognized as one of Develop's 30 under 30. His expertise has been built over the past 10 years, working in the intersection between creativity and education. Starting in 2015, he published a series of educational tutorials for other developers and machine learning enthusiasts


## Other books by the authors
* [Unity 2017 Mobile Game Development](https://www.packtpub.com/game-development/unity-2017-mobile-game-development?utm_source=github&utm_medium=repository&utm_campaign=9781787288713)
* [Unreal Engine: Game Development from A to Z](https://www.packtpub.com/game-development/unreal-engine-game-development-z?utm_source=github&utm_medium=repository&utm_campaign=9781787123281)
* [Unity 5.x Shaders and Effects Cookbook](https://www.packtpub.com/game-development/unity-5x-shaders-and-effects-cookbook?utm_source=github&utm_medium=repository&utm_campaign=9781785285240)

### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.

