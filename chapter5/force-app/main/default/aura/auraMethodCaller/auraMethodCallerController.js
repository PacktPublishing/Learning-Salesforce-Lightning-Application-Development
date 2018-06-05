/* auraMethodCallerController.js */
({
    callAuraMethod : function(component, event, helper) {
        var childCmp = component.find("child");
        // call the aura:method in the child component
       var param = {'name' : 'Mohith'};
        var auraMethodResult = childCmp.sampleMethod("1",param);
        console.log("auraMethodResult: " + auraMethodResult);
    },
})
