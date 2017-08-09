/////////////////////
//	First Section  //
////////////////////

$(function(event){
// Variables for player1 and player2

// player1 variables
var player1choice = [];

// player2 variables
var player2choice = [];

// winning combinations
var winArray = [[0,1,2], [0,3,6], [6,7,8], [2,5,8], [0,4,8], [6,4,2], [3,4,5], [1,4,7]]; 

// counter for turns taken
var turn = 1;

// comparison of player choice with stored winning combinations 

// store player position




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
		console.log($(box1).attr("data-num"));
		// if statement to determine which player is which
		if(turn % 2 === 0){
			$(box1).html('X'); // converts the data attribute to 'X'
			turn += 1;
			player1choice.
		}else {
			$(box1).html('O'); // converts the data attribute to 'O'
			turn +=1;
		}
	});
}
// function which stores number in array
function onClick(box2,){
	$(box2).on('click', function(){
		console.log($(box2).attr("data-num"));
		}
}


})





