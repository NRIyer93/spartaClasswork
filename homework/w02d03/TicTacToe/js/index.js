/////////////////////
//	First Section  //
////////////////////

$(function(event){
// Variables for player1 and player2
var array;
// player1 variables
var playerXchoice = [];

// player2 variables
var playerOchoice = [];

// winning combinations
var winArrays = [["0","1","2"], ["0","3","6"], ["6","7","8"], 
				["2","5","8"], ["0","4","8"], ["6","4","2"], ["3","4","5"], ["1","4","7"]]; 

// counter for turns taken
var turn = 1;

// comparison of player choice with stored winning combinations 





// declare all the button-boxes
var boxes = $("td");
    $(boxes).each(function(index,box){
        onClick(box);
    })

//////////////////////////
// 		FUNCTIONS      //
/////////////////////////

// function to enable all boxes
function onClick(box1,){
	$(box1).on('click', function(){
		//console.log($(box1).attr("data-num"));
		
		// if statement to determine which player is which
		if(turn % 2 === 0){
			$(box1).html('X'); // converts the data attribute to 'X'
			
			console.log('X turn');
			// store move?
			 var position = $(box1).attr("data-num");
			 console.log("this is X's move: " + position);
			 var array = playerXchoice.push(position);
			 turn += 1;
		}else {
			$(box1).html('O'); // converts the data attribute to 'O'
			
			console.log('O turn');
			// store move?
			var position = $(box1).attr("data-num");
			console.log("this is O's move: " + position);
			var array = playerOchoice.push(position);
			turn +=1;
			//console.log(array);
		}
		console.log(playerXchoice); // shows the array contain
		console.log(playerXchoice);
	});
}


// function to iterate through the winning combinations 
// and compare with the player's moves
$(winArrays).each(function(index, array){
		// if statement to compare choice
		if(index === playerXchoice){
			console.log('successful');
		}
})


// function which stores number in array
// function onClick(box2,){
// 	$(box2).on('click', function(){
// 		console.log($(box2).attr("data-num"));
// 		})
// }


})





