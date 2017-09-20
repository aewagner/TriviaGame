//  This code will run as soon as the page loads.

//window.onload = function() 

var intervalId;

var timerRunning = false;

var decrement = 0;



var timer = {
	
	time: 150,

	start: function() {
		intervalId = setInterval(timer.count, 1000);
		console.log("start")
		console.log(timer.time);

		if (timer.time === 120) {
			console.log("next question!")
		}
	},

	count: function() {

		var decrement = timer.time--;
		console.log("count");
		console.log(timer.time);

	},

};

$("button").on("click", timer.start);







	console.log("Hi!");
