({
    navigateToAccountHome : function(component, event, helper) {
        var navService = component.find("navService");
        // Sets the route to /lightning/o/Account/home
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        };
        navService.navigate(pageReference);
    },

    navigateToDemoComponet : function(component, event, helper) {
        var navService = component.find("navService");
        var pageReference = {
            type: 'standard__component',
            attributes: {
                "componentName": "c__demoComponent"    
            },
            state: {
                "simpleMsg": 'Hello Demo Component'
            }
        };
        navService.navigate(pageReference);
    },

    navigateToRecordDetail : function(component, event, helper) {
        var navService = component.find("navService");
        var pageReference = {    
            "type": "standard__recordPage",
            "attributes": {
                "recordId": component.get("v.accountId"),
                "objectApiName": "Account",
                "actionName": "view"
            }
        }
        navService.navigate(pageReference);
    },

    navigateToRecordRelated : function(component, event, helper) {
        var navService = component.find("navService");
        var pageReference = {    
            "type": "standard__recordRelationshipPage",
            "attributes": {
                "recordId": component.get("v.accountId"),
                "objectApiName": "Account",
                "relationshipApiName": "Cases",
                "actionName": "view"
            }
        }
        navService.generateUrl(pageReference)
        .then($A.getCallback(function(url) {
           console.log('url from service',url);
        }), $A.getCallback(function(error) {
            console.log(error);
        }));
        navService.navigate(pageReference);
    }
})
