({
    onInit : function(component, event, helper) {
      helper.doInit(component, event, helper);
    },
      
      handleClick : function(component, event, helper) {
            var components = component.find("dynamicFormId");//Extract all the components
            components.forEach(function(cmp) {
                console.log(cmp.get("v.value"));//Display the value and the type
                console.log(cmp.get("v.type"));
                if (cmp.get("v.type") === 'checkbox'){
                  console.log(cmp.get("v.checked"));
                }
             });
         }
  })
