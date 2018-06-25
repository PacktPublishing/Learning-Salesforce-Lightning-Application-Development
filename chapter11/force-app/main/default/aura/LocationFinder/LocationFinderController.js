({
    invoke : function(component, event, helper) {
        return new Promise(function(resolve, reject) {
            // Do something asynchronously, like get data from
            // an on-premise database
   
            // Complete the call and return to the flow
            if ('geolocation' in navigator) {
               // Set output values for the appropriate attributes
               navigator.geolocation.getCurrentPosition(function (location) {
                    component.set("v.latitude",location.coords.latitude.toString());
                    component.set("v.longitude",location.coords.longitude.toString());
                    resolve();
                });
            } else {
               reject(new Error("My error message")); 
            }
         });
    }
})
