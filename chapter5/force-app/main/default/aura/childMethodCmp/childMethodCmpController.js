/* auraMethodController.js */
({
    doAction : function(cmp, event) {
        var params = event.getParam('arguments');
        if (params) {
            var param1 = params.param1;
            var param2 = params.param2
            return param2;
        }
    },
})
