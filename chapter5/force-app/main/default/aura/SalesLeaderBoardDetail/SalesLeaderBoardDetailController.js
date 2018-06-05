({
    showOppmodal: function(component, event, helper) {
         //Toggle CSS styles for opening Modal
        helper.toggleClass(component,'backdrop','slds-backdrop--');
        helper.toggleClass(component,'modaldialog','slds-fade-in-');
        helper.getopportunitylst(component,event);
    },

    hideModal : function(component, event, helper) {
         //Toggle CSS styles for hiding Modal
        helper.toggleClassInverse(component,'backdrop','slds-backdrop--');
        helper.toggleClassInverse(component,'modaldialog','slds-fade-in-');
    }
})