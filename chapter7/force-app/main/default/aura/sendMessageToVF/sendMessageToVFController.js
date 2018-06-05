({
    sendToVF : function(component, event, helper) {
        var message = component.get("v.message");
        var vfOrigin = "https://" + component.get("v.vfHost");
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
        vfWindow.postMessage(message, vfOrigin);
    },

    doInit : function(component) {
        var vfOrigin = "https://" + component.get("v.vfHost");
        window.addEventListener("message", function(event) {
            if (event.origin !== vfOrigin) {
                // Not the expected origin: Reject the message!
                return;
            }
            // Handle the message
            console.log(event.data);
        }, false);
    }

})

