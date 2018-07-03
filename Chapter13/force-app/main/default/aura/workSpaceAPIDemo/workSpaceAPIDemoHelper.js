({
    
    getAccountPromise : function(component, event) {
        return new Promise($A.getCallback( (resolve, reject) => {

            var action = component.get("c.getAccountInfo");

            action.setParams({ recordId : component.get("v.recordId") });
            
            action.setCallback(this, (response) => {
                var state = response.getState();
                if (state === "SUCCESS") {
                    resolve(response.getReturnValue());
                }
                else {
                    reject(response.getError());
                }
            });

            $A.enqueueAction(action);

        }));
           
    },

    


})


