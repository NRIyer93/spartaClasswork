var choice;
var compChoices= ["ROCK","PAPER","SCISSORS"];
var compChoice;
var userScore;
var compScore;
function userChoice(choice) {
	if (choice == "ROCK" || choice == "rock") {
		alert("You have chosen ROCK!");
	} else if (choice == "PAPER") {
		alert("You have chosen PAPER!");
	} else if(choice == "SCISSORS") {
		alert("You have chosen SCISSORS");
	}else {
		alert("INVALID CHOICE")
	}
}
function compChoice1(compMove) {
		if (compMove == "ROCK") {
			alert("Computer has chosen ROCK");
		} else if (compMove == "PAPER") {
			alert("Computer has chosen PAPER");
		} else {
			alert("Computer has chosen SCISSORS");
		}
}
function evaluate(compMove,choice) {
		if (choice == "ROCK") {
				if (compMove == "ROCK"){
					alert("DRAW");
	 			}else if(compMove == "PAPER"){
					alert("Computer wins with PAPER!");
	 				compScore += 1;
	 			}else {
					alert("You win with ROCK!");
					userScore += 1;
	 			}
	 	} else if (choice == "PAPER") {
				if (compMove == "ROCK"){
					alert("You win with PAPER!");
	 				userScore =+ 1;
	 			}else if(compMove == "PAPER"){
					alert("DRAW!");
	 			}else {
					alert("You lose!");
	 				compScore =+ 1;
	 			}
		} else {
				if (compMove== "ROCK"){
					alert("You lose!");
	 				compScore += 1;
	 			}else if(compMove == "PAPER"){
					alert("You win with SCISSORS!");
	 				userScore += 1;
	 			}else {
					alert("DRAW!");
	 			}
		} 
}
function runGame() {
	alert("Welcome to Rock, Paper, Scissors");
	choice = prompt("Please choose ROCK, PAPER, or SCISSORS");
	compChoice = compChoices[Math.floor(Math.random() * 3)];
	userChoice(choice);
	compChoice1(compChoice);
	evaluate(compChoice,choice);
	
}
runGame();
