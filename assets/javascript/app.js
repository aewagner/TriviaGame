//  This code will run as soon as the page loads.

//window.onload = function() 

var intervalId;

var timerRunning = false;

var decrement;

var score = 0;



var timer = {
	
	time: 150,

	start: function() {
		intervalId = setInterval(timer.count, 1000);
		console.log("start");
		console.log(timer.time);

		// if (decrement === 120) {
		// 	console.log("next question!")
		//}
	},

	count: function() {

		decrement = timer.time--;
		console.log("count");
		console.log(timer.time);

		// // if (decrement === 145) {
		// // 	console.log("next question!")
		// };

		timer.newQuestion();

	},

	newQuestion: function () { 

		$("#start-button").remove();

		if (decrement === 150) {
			console.log("Question 1");
			$("#question").text("Question 1");
			$("#choice-one").text("Choice A");
			$("#choice-two").text("Choice B");
			$("#choice-three").text("Choice C");
			$("#choice-four").text("Choice D");
			$("#choice-four").text("Choice E");

			$("#choice-three").attr("value", true);

			

		};

		 if (decrement === 120) {
			console.log("Question 2");
			$("#question").html("Question 2")
			$("#choice-one").html("Choice F");
			$("#choice-two").html("Choice G");
			$("#choice-three").html("Choice H");
			$("#choice-four").html("Choice I");
			$("#choice-four").html("Choice J");

			$("#choice-three").attr("value", true);
		};

		if (decrement === 90) {
			console.log("Question 3");
			$("#question").html("Question 3")
			$("#choice-one").html("Choice K");
			$("#choice-two").html("Choice L");
			$("#choice-three").html("Choice M");
			$("#choice-four").html("Choice N");
			$("#choice-four").html("Choice O");

			$("#choice-three").attr("value", true);
		};

		 if (decrement === 60) {
			console.log("Question 4");
			$("#question").html("Question 4")
			$("#choice-one").html("Choice P");
			$("#choice-two").html("Choice Q");
			$("#choice-three").html("Choice R");
			$("#choice-four").html("Choice S");
			$("#choice-four").html("Choice T");

			$("#choice-three").attr("value", true);
		};

		if (decrement === 30) {
			console.log("Question 5");
			$("#choice-one").html("Choice U");
			$("#choice-two").html("Choice V");
			$("#choice-three").html("Choice X");
			$("#choice-four").html("Choice Y");
			$("#choice-four").html("Choice Z");

			$("#choice-three").attr("value", true);

		};

	},

	// checker: function () {

	// 	userChoice = $(this).attr("value");

	// 	if (userChoice === true) {
	// 		score++;
	// 		console.log(score);
	// 	};

	// },

};

$(".choices").on("click", function () {

		userChoice = $(this).attr("value");

		if (userChoice === true) {
			score++;
			console.log(score);
		};
	});





$("button").on("click", timer.start);
$("button").on("click", timer.newQuestion);










	console.log("Hi!");
