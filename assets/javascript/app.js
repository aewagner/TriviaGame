//  This code will run as soon as the page loads.

//window.onload = function() 

var intervalId;

var timerRunning = false;

var decrement;



var timer = {
	
	time: 150,

	start: function() {
		intervalId = setInterval(timer.count, 1000);
		console.log("start")
		console.log(timer.time);

		// if (decrement === 120) {
		// 	console.log("next question!")
		//}
	},

	count: function() {

		decrement = timer.time--;
		console.log("count");
		console.log(timer.time);

		if (decrement === 145) {
			console.log("next question!")
		};

	},

	// newQuestion: function () { 

	// 	if (decrement === 120) {
	// 		console.log("next question!")
	// 	};

	// },

};

$("button").on("click", timer.start);
$("button").on("click", timer.newQuestion);







	console.log("Hi!");
