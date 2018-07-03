({
    getAllUtilityInfo : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.getAllUtilityInfo().then(function(response) {
            var myUtilityInfo = response[0];
            utilityAPI.openUtility({
                utilityId: myUtilityInfo.id
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    },

    getEnclosingUtilityId : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.getEnclosingUtilityId().then(function(utilityId) {
            console.log(utilityId);
        })
        .catch(function(error) {
            console.log(error);
        });
    },

    openUtility : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.openUtility();
    },

    setUtilityHighlighted : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.setUtilityHighlighted({
            highlighted: true
        });
    },

    toggleModalMode : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.toggleModalMode({
            enableModalMode: true
        });
    },


})
