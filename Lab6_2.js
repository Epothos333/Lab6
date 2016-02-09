var match = function() {
	var matchz = false
	var compNum = Math.floor((Math.random()*10)+1).toString();
	while (matchz === false){
	var userNum = prompt("Guess a number 1-10!");
	if (compNum === userNum) {
		matchz = true;
		alert("Great Work!")
	}
	else if (userNum > compNum || userNum === "10") {
			alert("Lower Fool!");
		}
	else {
			alert("Higher Fool!");
		}
	}
}

match();


