({
    onInit : function(component, event, helper) {
      console.log('Inside init event');
          console.log('step1');
          console.log('FIND COMPONENT IN INIT..'+component.find("example"));
          console.log('FIND DOM IN INIT..'+component.find("example").getElement());
    },
      
      onRender : function(component, event, helper) {
          console.log('Inside render event');
          console.log('step4');
          console.log('FIND COMPONENT ONCE RENDER EVENT IS FIRED..'+component.find("example"));
          console.log('FIND DOM ONCE RENDER EVENT IS FIRED..'+component.find("example").getElement());
      },
      
      handleClick : function(component, event, helper) {
          component.set("v.search","test");
      }
  })
