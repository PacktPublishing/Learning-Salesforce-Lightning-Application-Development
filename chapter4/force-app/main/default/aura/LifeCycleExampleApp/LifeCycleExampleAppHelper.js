({
    // Your renderer method overrides go here
    render : function(component, helper) {
          var ret = this.superRender();
          // do custom rendering here
          console.log('Inside render Function');
          console.log('step2');
          console.log('DOM ELEMENT IN render' +component.find("example").getElement());
          console.log(ret);
          return ret;
    },
      
      rerender : function(cmp, helper){
        this.superRerender();
        // do custom rerendering here
    },
      
      afterRender: function (component, helper) {
        this.superAfterRender();
          console.log('Inside afterRender Function');
          console.log('step3');
          console.log('COMPONENT IN afterrender' +component.find("example"));
          console.log('DOM ELEMENT IN afterRender' +component.find("example").getElement());
        // interact with the DOM here
    },
      
      unrender: function () {
        this.superUnrender();
        // do custom unrendering here
    }
  })
