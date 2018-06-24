({
    validateEmailService : function(component, event) {
        this.mailBoxLayerValidateEmail(component, event).then(
            function(response) {
                console.log("Success!", response);
                component.set("v.serviceResponse",response);
            },function(error) {
                console.error("Failed!", error);
            }
        )
    },

    mailBoxLayerValidateEmail : function(component, event){
        return new Promise($A.getCallback(function(resolve, reject) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = $A.getCallback(function() {
                if (this.readyState === 4) { // DONE
                    if (xhttp.status === 200) {
                        var response = JSON.parse(xhttp.responseText);
                        console.log(response);
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }
            });
            var requestUrl = "http://apilayer.net/api/check?access_key=64ad719f96635146eb132ce0af5af7ac&email=";
            requestUrl = requestUrl + component.get("v.email") + '&smtp=1' + '&format=1';
            xhttp.open("GET", requestUrl);
            xhttp.send(null);
        }));
    }

})
