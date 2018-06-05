({
    setdashboard: function(component) {
        var action = component.get("c.getSLDashboardData");
            var self = this;
            action.setCallback(this, function(response) {
            var state = response.getState();
            console.log(response.getReturnValue());
                if (component.isValid() && state === "SUCCESS") {
                    component.set("v.lstsalesUser",response.getReturnValue());
                }else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        
                    } else {
                        
                    }
                }
            });
        $A.enqueueAction(action);
    }
})
