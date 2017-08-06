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

 
/*	switch(choice) {

 	case 1:

 		if (compChoice <= 0.33 && choice == "ROCK") {

 			alert("DRAW");
 		
 		} else if((compChoice >= 0.34 && compChoice <= 0.66) && choice == "PAPER") {

 			alert("YOU WIN WITH PAPER");
 		
 		} else if(compChoice >= 0.67 && choice == "SCISSORS") {

 			alert("COMPUTER WINS WITH ROCK");
 		
 		} else {

 			null;
 		} 

*/
 		

 		

 















