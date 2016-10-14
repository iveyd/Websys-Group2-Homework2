$(document).ready(function() {
	(function( $ ) {
	    $.fn.hexed = function( settings ) {	
	 		// Defaults
	   		var difficulty = 5;
	   		var turns = 10;
	   		// If settings are present, assign them
	   		if (settings) {
	   			if (settings.difficulty) {
	   				difficulty = settings.difficulty;
	   			}
	   			if (settings.turns) {
	   				turns = settings.turns;
	   			}
	   		}
	   		// Add Title
	   		this.append("<h1>Hexed</h1>");
	   		// Add sliders
	   		this.append("<div id='spinners'>\
	   						<input type='text' id='difficulty' value='0'/>\
	   						<input type='text' id='turns' value='0'/>\
	   					</div>");
	   		$("#difficulty").spinner({
	   			min: 0,
	   			max: 10,
	   			change: function() { // limit greater/smaller values
			        var min = $(this).spinner('option', 'min');
			        var max = $(this).spinner('option', 'max');

			        if (isNaN($(this).val())) {
			            $(this).spinner("value", min);
			        } else if ($(this).val() > max) {
			            $(this).spinner("value", max);
			        } else if ($(this).val() < min) {
			            $(this).spinner("value", min);
			        }
				}
	   		}).val(difficulty);
	   		$("#turns").spinner({
	   			min: 0,
	   			change: function() { // limit greater/smaller values
			        var min = $(this).spinner('option', 'min');
			        var max = $(this).spinner('option', 'max');

			        if (isNaN($(this).val())) {
			            $(this).spinner("value", min);
			        } else if ($(this).val() < min) {
			            $(this).spinner("value", min);
			        }
				}
	   		}).val(turns);

	 		// Return self for chaining
	        return this;
	    };
	}( jQuery ));
	// Call initial game
	$("#hexed").hexed();
});