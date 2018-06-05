({
    afterScriptsLoaded : function(component, event, helper) {
        var ctx = document.getElementById("piechart").getContext('2d');
        var data = {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: [
                    "Red",
                    "Green",
                    "#E9967A"
                ]
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Closed Cases',
                'In Progress Cases',
                'New Cases'
            ]
        };
        var myPieChart = new Chart(ctx,{
            type: 'pie',
            data: data
        });

    }
})
