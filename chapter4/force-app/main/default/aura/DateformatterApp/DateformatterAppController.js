({
    onChange : function(component, event, helper) {
      console.log(component.get("v.DateTimeInput"));
          var dateInput = component.get("v.DateTimeInput")
          var selectedformat = component.find('select').get('v.value') ;
          var output = $A.localizationService.formatDate(dateInput,selectedformat);
          component.set("v.output",output);
    }
  })
