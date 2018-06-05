({
    jsLoaded : function(component, event, helper) {
        console.log(window);
        console.log(window.StaticResource);
        const choices = new StaticResource.Choices(component.find('choices').getElement(), {
             items: [ 'India', 'Australlia', 'China' ]
        })
    }
})