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
	 		// Return self for chaining
	        return this;
	    };
	}( jQuery ));
	// Call initial game
	$("#hexed").hexed();
});