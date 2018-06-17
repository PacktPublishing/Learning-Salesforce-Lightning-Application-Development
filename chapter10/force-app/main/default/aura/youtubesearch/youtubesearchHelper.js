({
    setSearchTerm : function(component, event) {
          var searchTerm = component.find('searchBox').getElement().value;
          console.log(searchTerm);
           component.set("v.searchTerm",searchTerm);
           // create a one-time use instance of the search action
          // in the server-side controller
          var action = component.get("c.search");
          action.setStorable();
          action.setParams({ searchstr : searchTerm});
          action.setCallback(this, function(response) {
              var state = response.getState();
              if (state === "SUCCESS") {
                  var responseData = JSON.parse(response.getReturnValue());
                  console.log(responseData);
                  console.log(responseData.kind);
                  component.set("v.data",responseData);
              }
              else if (state === "INCOMPLETE") {
                  // do something
              }
              else if (state === "ERROR") {
                  var errors = response.getError();
                  if (errors) {
                      if (errors[0] && errors[0].message) {
                          console.log("Error message: " + 
                                   errors[0].message);
                      }
                  } else {
                      console.log("Unknown error");
                  }
              }
          });
          $A.enqueueAction(action);
    }
  })
