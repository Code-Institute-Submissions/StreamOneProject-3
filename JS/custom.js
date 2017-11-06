document.addEventListener("DOMContentLoaded", function(event) { 


	var today = new Date();
	var hourNow = today.getHours();
	var greeting;

	if (hourNow > 17) {
		greeting = 'Good Evening!';
	} else if (hourNow > 11) {
		greeting = 'Good Afternoon!';
	} else if (hourNow > 0) {
		greeting = 'Good Morning!';
	} else {
		greeting = 'Welcome!'
	}

	document.getElementById('greeting').innerHTML=greeting;

})

