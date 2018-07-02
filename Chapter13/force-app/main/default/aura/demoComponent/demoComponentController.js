({
    init : function(component, event, helper) {
        var pageReference = component.get("v.pageReference");
        component.set("v.simpleMsg", pageReference.state.c__simpleMsg);
    }
})
