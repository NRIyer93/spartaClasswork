/////////////////////
//	  Variables   //
////////////////////

$(function(event){
// Variables for player1 and player2
var array;
// player1 variables
var playerXchoices = [];

// player2 variables
var playerOchoices = [];

// winning combinations
var winArrays = [["0","1","2"], ["0","3","6"], ["6","7","8"], 
				["2","5","8"], ["0","4","8"], ["6","4","2"], ["3","4","5"], ["1","4","7"]]; 

// counter for turns taken
var turn = 1;

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
			// store move in array containing X's moves
			 var position = $(box1).attr("data-num");
			 console.log("this is X's move: " + position);
			 var array = playerXchoices.push(position);
			 turn += 1;
			 console.log(playerXchoices);
		}else {
			$(box1).html('O'); // converts the data attribute to 'O'
			console.log('O turn');
			// store move in array containing O's moves
			var position = $(box1).attr("data-num");
			console.log("this is O's move: " + position);
			var array = playerOchoices.push(position);
			turn +=1;
			console.log(playerOchoices);
		}
	});
}

// function to iterate through the winning combinations 
// and compare with the player's moves
$(winArrays).each(function(index, array){
		// if statement to compare choice
		$(playerXchoices).each(function(index1, choice){
			if(winArrays.index === playerXchoices.index1){
			console.log('successful');
		}
		})



		
	})
})





