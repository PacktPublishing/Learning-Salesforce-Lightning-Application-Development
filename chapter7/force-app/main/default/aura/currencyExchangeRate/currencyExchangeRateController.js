({
    doInit : function(component, event, helper) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = $A.getCallback(function() {
            if (this.readyState === 4) { // DONE
                if (xhttp.status === 200) {
                    var response = JSON.parse(xhttp.responseText);
                    var data = [];
                    for (var value in response.rates) {
                        var dataItem = {};
                        dataItem.currency = value;
                        dataItem.rate = response.rates[value];
                        data.push(dataItem);
                    }
                    component.set("v.exchangeRateData",data);
                }
                else {
                    console.log('Request failed.  Returned status of ' + xhttp.status);
                }
            }
        });
        xhttp.open("GET", "https://exchangeratesapi.io/api/latest");
        xhttp.send(null);
    }
})
