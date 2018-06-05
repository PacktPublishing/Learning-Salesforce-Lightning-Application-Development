({
    jsLoaded : function(component, event, helper) {
        const choices = new Choices(component.find('choices').getElement(), {
            items: [ 'Astro', 'Codey', 'Appy' ]
       })
    }
})