/* auraMethodController.js */
({
    getContacts : function(cmp, event) {
        var params = event.getParam('arguments');
        var callback;
        if (params) {
            callback = params.callback;
        }

        var action = cmp.get("c.getServerContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("From server: " + response.getReturnValue());
                //return doesn't work for async server action call
                //return response.getReturnValue();
                // call the callback passed into aura:method
                if (callback) callback(response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                          errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
})
