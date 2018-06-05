({
	afterScriptsLoaded : function(component, event, helper) {
		var clock;
		clock = $('.clock').FlipClock({
			clockFace: 'TwentyFourHourClock'
		});
	}
})