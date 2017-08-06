var message = alert("Welcome to ROCK, PAPER, SCISSORS!");
var choice = prompt("Choose ROCK, PAPER or SCISSORS");

 
// Put choice and compchoice into the same if statement using comparators
if (choice == "ROCK") {

	alert("You have chosen ROCK!");

} else if (choice == "PAPER") {

	alert("You have chosen PAPER");

} else {

	alert("You have chosen SCISSORS");
}

// Computer choice 
var compChoice = Math.random();
 
 if (compChoice <= 0.33) {

 	compChoice = "ROCK";
 	alert(compChoice);
	alert("The computer chose ROCK!");
 
 } else if (compChoice >= 0.34 && compChoice <= 0.66) {

 	compChoice = "PAPER";
 	alert(compChoice);
 	alert("The computer chose PAPER");
 
 } else {

 	compChoice = "SCISSORS";
 	alert(compChoice);
 	alert("The computer chose SCISSORS");
 }



 //var result = compChoice;

		if (choice == "ROCK") {

 			if (compChoice <= 0.33){

 				alert("DRAW");
 			
 			} else if(compChoice == "PAPER"){

 				alert("Computer wins with PAPER!");
 			
 			} else {

 				alert("You win with ROCK!");
 			}
 		
 		} else if (choice == "PAPER") {

 			if (compChoice == "ROCK"){

 				alert("You win with PAPER!");
 			
 			} else if(compChoice == "PAPER"){

 				alert("DRAW!");
 			
 			} else {

 				alert("You lose!");
 			}

 		} else if (choice == "SCISSORS") {

 			if (compChoice == "ROCK"){

 				alert("You lose!");
 			
 			} else if(compChoice == "PAPER"){

 				alert("You win with SCISSORS!");
 			
 			} else {

 				alert("DRAW!");
 			}


 		} else {

 			alert("Invalid choice");
 		}
 		

 
 		

 		

 















