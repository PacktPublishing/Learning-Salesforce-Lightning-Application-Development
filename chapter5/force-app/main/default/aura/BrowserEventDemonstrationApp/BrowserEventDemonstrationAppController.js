({
    handleClick : function(component, event, helper) {
          console.log(event.target.innerHTML);
          console.log(event.currentTarget.innerHTML);
          var divElement = document.getElementById('divId');
          divElement.addEventListener('click', helper.helperMethod(component, event), false);
    }
  })
