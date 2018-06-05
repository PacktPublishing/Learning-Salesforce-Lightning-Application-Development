({
    doInit : function(component, event, helper) {
        console.time("renderladder");
        var arrayList = [];
        for(var i=0 ; i<=50 ; i++){
            arrayList.push(i);
        }
        component.set("v.arraySize",arrayList);
        console.timeEnd("renderladder");
    }
})
