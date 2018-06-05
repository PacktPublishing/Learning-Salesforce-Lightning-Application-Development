({
    setActive : function(component, event, helper) {
      var buttons = component.find("myBtn");
          buttons.forEach(function(buttonCmp) {
              buttonCmp.set("v.variant","Neutral");
          });
          event.getSource().set("v.variant", "Brand");
    }
  })
