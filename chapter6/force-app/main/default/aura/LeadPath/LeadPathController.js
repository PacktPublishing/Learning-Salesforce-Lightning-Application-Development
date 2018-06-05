({
    onInit:function(component, event, helper) {
       
    },
    
    handleRecordUpdated : function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
           // record is loaded (render other component which needs record data value)
            console.log("Record is loaded successfully.");
            helper.setPathValue(component, event);
        } else if(eventParams.changeType === "CHANGED") {
            // record is changed
            helper.setPathValue(component, event);
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving, or deleting the record
        }
    }
})
