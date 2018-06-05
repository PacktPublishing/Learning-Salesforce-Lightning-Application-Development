({
    afterScriptsLoaded : function(component, event, helper) {
        $('.js-example-basic-multiple').select2();
    },

    handleClick : function(component, event, helper) {
        var selectedItems = $("#states").val();
        component.set("v.selectedStates",selectedItems);
        console.log(selectedItems);
    }
})
