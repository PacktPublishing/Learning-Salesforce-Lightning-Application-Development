({
    doInit : function(component,helper,event) {
      var dynamicFormInput = [
       ["lightning:input",{
           "label" : "Text Field",
           "name" : "TextField",
           "aura:id" : "dynamicFormId"
       }],
       ["lightning:input",{
           "type" : "search",
           "label" : "search",
           "name" : "search",
           "aura:id" : "dynamicFormId"
       }],
          
          ["lightning:input", {
            "type" : "checkbox",
           "label" : "Red",
           "name" : "red",
           "aura:id" : "dynamicFormId"
          }],
       ];
      $A.createComponents(dynamicFormInput,
       function(components, status, errorMessage){
           if (status === "SUCCESS") {
                var formBody = component.get("v.dynamicForm");
                components.forEach(function(element) {
                formBody.push(element);
                console.log(element);
            }); 
              component.set("v.dynamicForm", formBody);
           }
           else if (status === "INCOMPLETE") {
               console.log("No response from server or client is offline.")
               // Show offline error
           }
           else if (status === "ERROR") {
               console.log("Error: " + errorMessage);
               // Show error message
           }
        }
     );
   }
   })
