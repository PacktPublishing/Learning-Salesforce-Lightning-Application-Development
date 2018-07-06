# Create a Project
sfdx force:project:create -n projectname

# Authenticate to Dev Hub
sfdx force:auth:web:login -d -a DevHub

# Set as Default Devhub
sfdx force:config:set defaultdevhubusername=DevHub

# Create a scratch org with alias testOrg
sfdx force:org:create -s -f config/project-scratch-def.json -a testOrg

# Set an existing scratch org as default
sfdx force:config:set defaultusername=<username|alias>

# Open the scratch org with alias 'testOrg' in browser
sfdx force:org:open -u testOrg

# Convert source code to a package. Be ready to deploy to sandbox
sfdx force:source:convert -d mdapi/ --packagename package_name

# Authenticate to Dev Hub
sfdx force:auth:web:login -d -a DevOrg 

# Deploy to connected environment without running test; wait 5mins for the report
sfdx force:mdapi:deploy -d mdapi/ -u devOrg -l NoTestRun -w 5

# Data Export Commands
sfdx force:data:tree:export --query \
      "SELECT Id,Name, \
       (SELECT Name,Id FROM Contacts) \
       FROM Account" --prefix export-demo --outputdir data --plan

# Create Second Generation Packaging
sfdx force:package2:create --name RecuritingApp --containeroptions Unlocked

# Create a version of the package using the force:package2:version:create command
sfdx force:package2:version:create -d force-app

# Install the package In PROD/Sandbox
sfdx force;package:install -i packageVersionId
