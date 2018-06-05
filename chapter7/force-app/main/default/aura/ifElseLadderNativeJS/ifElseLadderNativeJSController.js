({
    onRender : function(component, event, helper) {
        var mainBody = component.find("main").getElement();
        for(var i=0 ; i<=100 ; i++){
            var parentDiv = document.createElement("div");
            parentDiv.innerHTML = i;
            mainBody.appendChild(parentDiv);
            for(var j=0 ; j<=100 ; j++){
                var childDiv = document.createElement("div");
                childDiv.innerHTML = j;
                parentDiv.appendChild(childDiv);
            }
        }
    }
})
