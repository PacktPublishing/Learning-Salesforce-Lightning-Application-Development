({
    handleSuccess : function(component, event, helper) {
        console.log(event.getParams().response);
        for (let key of Object.keys(event.getParams().response)) {
            console.log(key + event.getParams().response[key]);
          }
        console.log(event.getParams().response.id);
        //console.log(component.find("name").get("v.value"));
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been created successfully.",
            "type": "success"
        });
        toastEvent.fire();
    },

    handleSubmit : function(component, event, helper) {
        console.log('Submit Event' + JSON.stringify(event.getParams()));
        console.log(component.find("company"));
    },

    handleOnload : function(component, event, helper) {
        console.log('Load Event' + JSON.stringify(event.getParams()));
    },
})
