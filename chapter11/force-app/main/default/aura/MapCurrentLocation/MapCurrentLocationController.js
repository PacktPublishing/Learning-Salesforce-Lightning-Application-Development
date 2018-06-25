({
    init : function(component, event, helper) {
        // Find the component whose aura:id is "myFlow"
        var flow = component.find("myFlow");
        // In that component, start your flow. Reference the flow's Unique Name.
        flow.startFlow("LocationFinder");//Assumes flow unique name is myFlow
    },

    handleStatusChange : function (component, event) {
        if(event.getParam("status") === "FINISHED") {
           // Get the output variables and iterate over them
           var outputVariables = event.getParam("outputVariables");
           var outputVar;
           var latitude;
           var longitude;
           for(var i = 0; i < outputVariables.length; i++) {
              outputVar = outputVariables[i];
              // Pass the values to the component's attributes
              if(outputVar.name === "latitude") {
                latitude = outputVar.value;
              } else if (outputVar.name === "longitude"){
                longitude = outputVar.value;
              }
            }
            var mapURL = 'https://maps.google.com/maps?&z=15&q=' + latitude + '+' + longitude + '&ll=' + latitude + '+' + longitude;
            window.open(mapURL,"_target");
        }
     },


})
