({
    handleClick : function(component, event, helper) {
        var spinnerComponent = component.find("spinner");
        console.log(spinnerComponent);
        $A.util.toggleClass(spinnerComponent, "toggle");
    }
  })
