({
    init : function (component) {

    },

    createLead : function(component, event, helper) {
        var inputVariables = [
            {
                name : "Leadvar",
                type : "SObject",
                value: component.get("v.leadRec")
            }
        ];
        var flow = component.find("flowData");
        flow.startFlow("Create_Lead_Flow", inputVariables); 
    },

    handlestatuschange : function(component, event, helper) {
        if(event.getParam("status") === "FINISHED_SCREEN") {
            var outputVariables = event.getParam("outputVariables");
            console.log(outputVariables);
            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
            "recordId": outputVariables[0].value,
            "slideDevName": "related"
            });
            navEvt.fire();
        }
    }
})
