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

// declare all the button-boxes
var boxes = $("td");
    $(boxes).each(function(index,box){
        onClick(box);
    

})

function onClick(box1){
	$(box1).on('click', function(){
		console.log($(box1).attr("data-num"))
	})
}

})





