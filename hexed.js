$(document).ready(function() {
	(function( $ ) {
	    $.fn.hexed = function( settings ) {
	    	// Clear beggining of every game
	    	$(this).empty();
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
	   		// this.append("<div id='spinners'>\
	   		// 				<p class='desc'>Difficulty</p>\
	   		// 				<input type='text' id='difficulty' value='0'/>\
	   		// 				<p class='desc'>Turns</p>\
	   		// 				<input type='text' id='turns' value='0'/>\
	   		// 			</div>");
	   		this.append("<p class='desc'>Difficulty</p>\
	   					 <input type='text' id='difficulty' value='0'/>\
	   					 <p class='desc'>Turns</p>\
	   					 <input type='text' id='turns' value='0'/>");
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
	   		// New game button
	   		this.append("<div id='newGame'></div>");
	   		$("#newGame").button({
	   			label:"New Game"
	   		}).on("click", function() {
	   			$("#hexed").hexed({
	   				difficulty: $("#difficulty").spinner("value"),
	   				turns: $("#turns").spinner("value")
	   			});
	   		});
	   		// Random Color box
	   		var r = Math.floor(Math.random() * 255) + 1;
	   		var g = Math.floor(Math.random() * 255) + 1;
	   		var b = Math.floor(Math.random() * 255) + 1;
	   		this.append("<div id='Lcolor'></div>\
	   					 <div id='Rcolor'></div>\
	   					 <div id='red'></div>\
	   					 <div id='green'></div>\
	   					 <div id='blue'></div>");
	   		$("#Lcolor").css("background-color", "rgb("+r+","+g+","+b+")")
	   		// Player color box
	   		function refreshColor() {
		    	var red = $("#red").slider("value"),
		        	green = $("#green").slider("value"),
		        	blue = $("#blue").slider("value");
		      	$("#Rcolor").css("background-color","rgb("+red+","+green+","+blue+")");
		    };
		    $("#red, #green, #blue").slider({
		      orientation: "horizontal",
		      range: "min",
		      max: 255,
		      value: 127,
		      slide: refreshColor,
		      change: refreshColor
		    });
		    $("#red").slider("value",127);


	 		// Return self for chaining
	        return this;
	    };
	}( jQuery ));
	// Call initial game
	$("#hexed").hexed();
});