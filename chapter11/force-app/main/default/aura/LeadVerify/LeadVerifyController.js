({
    init : function(component, event, helper) {
        helper.validateEmailService(component, event);
    },

    handleClick : function(component, event, helper) {
        // Figure out which action was called
        var actionClicked = event.getSource().getLocalId();
        // Fire that action
         var navigate = component.get('v.navigateFlow');
        navigate(actionClicked);
    }
})
