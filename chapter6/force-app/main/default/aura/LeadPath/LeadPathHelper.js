({
    setPathValue : function(component,event) {
        var mapStatus = {"Contacted" : "1" , "Open" : "2" , "Unqualified" : "3" ,"Nurturing" : "4", "Closed" : "5" };
        var status = component.get("v.record").Status;
        component.set("v.currentStep",mapStatus[status]);
    }
})
