var message = alert("Welcome to ROCK, PAPER, SCISSORS!");
var choice = prompt("Choose ROCK, PAPER or SCISSORS");
// User choice
if (choice == "ROCK") {
	alert("You have chosen ROCK!");
}else if (choice == "PAPER") {
	alert("You have chosen PAPER");
}else {
	alert("You have chosen SCISSORS");
}
// Computer choice 
var compChoice = Math.random();
  if (compChoice <= 0.33) {
	compChoice = "ROCK";
 	alert(compChoice);
	alert("The computer chose ROCK!");
 }else if (compChoice >= 0.34 && compChoice <= 0.66) {
	compChoice = "PAPER";
 	alert(compChoice);
 	alert("The computer chose PAPER");
 }else {
	compChoice = "SCISSORS";
 	alert(compChoice);
 	alert("The computer chose SCISSORS");
 }
var userScore = 0;
var compScore = 0;
var scoreArray = [userScore, compScore];
	if (choice == "ROCK") {
			if (choice == "ROCK" && compChoice <= "ROCK"){
				alert("DRAW");
 			}else if(compChoice == "PAPER"){
				alert("Computer wins with PAPER!");
 				compScore =+ 1;
 			}else {
				alert("You win with ROCK!");
				userScore =+ 1;
 			}
 	}else if (choice == "PAPER") {
			if (compChoice == "ROCK"){
				alert("You win with PAPER!");
 				userScore =+ 1;
 			}else if(choice == "PAPER" && compChoice == "PAPER"){
				alert("DRAW!");
 			}else {
				alert("You lose!");
 				compScore =+ 1;
 			}
	}else if (choice == "SCISSORS") {
			if (choice == "SCISSORS" && compChoice == "SCISSORS"){
				alert("DRAW!");
 				compScore += 1;
 			}else if(compChoice == "PAPER"){
				alert("You win with SCISSORS!");
 				userScore += 1;
 			}else {
				alert("YOU LOSE!");
 			}
	} else {
			alert("Invalid choice");
 		}
 		
 	alert("Your score is: " + userScore);
 	alert("The computer's score is: " + compScore);


 

 		

 		

 















