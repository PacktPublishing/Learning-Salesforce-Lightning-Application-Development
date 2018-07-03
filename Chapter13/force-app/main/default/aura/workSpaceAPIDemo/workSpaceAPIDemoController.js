({
   
    onRecordIdChange : function(component, event, helper) {
        var newRecordId = component.get("v.recordId");
        console.log(newRecordId);
        //Get the Focused TabId
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            component.set("v.currentFocusedTabId",focusedTabId);
        })
    },

    openContacts : function(component, event, helper) {
        helper.getAccountPromise(component, event).then(
            // resolve handler
            $A.getCallback((result) => {
                var accountObj = JSON.parse(result);
                var workspaceAPI = component.find("workspace");
                var promiseArray = [];
                accountObj.Contacts.records.forEach((element) => {
                    var workSpaceAPIPromise = workspaceAPI.openTab({
                        recordId: element.Id,
                        focus: true
                    });
                    promiseArray.push(workSpaceAPIPromise);
                });
                promiseArray.all(promiseArray);//open all the Windows using Promise.all
            }),
            // reject handler
            $A.getCallback((error) => {
                console.log("Promise was rejected: ", error);
            })
        )
    },

    openCases : function(component, event, helper) {
        helper.getAccountPromise(component, event).then(
            // resolve handler
            $A.getCallback((result) => {
                var accountObj = JSON.parse(result);
                var workspaceAPI = component.find("workspace");
                var promiseArray = [];
                accountObj.Cases.records.forEach((element) => {
                    var workSpaceAPIPromise = workspaceAPI.openSubtab({
                        parentTabId: component.get("v.currentFocusedTabId"),
                        recordId: element.Id,
                        focus: true
                    });
                    promiseArray.push(workSpaceAPIPromise);
                });
                promiseArray.all(promiseArray);//open all the Windows using Promise.all
            }),
            // reject handler
            $A.getCallback((error) => {
                console.log("Promise was rejected: ", error);
            })
        )
    },


})
