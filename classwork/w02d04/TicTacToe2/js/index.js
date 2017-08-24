$(function(event) {
	///////////////////////////////////
	//Initial variables for the game //
	//////////////////////////////////
	
	//Find game squares
	var $boxes = $('td');

	//Screen for player turna
	var $turnText = $('.playerTurn');

	//Counters for moves and wins
	var counter = 0;
	var winCounter = 0;

	//Array to store player moves
	var Omoves = [];
	var Xmoves = [];

	//Winning combinations in an array
	var winningCombinations = [[0,1,2],[0,3,6], [6,7,8], 
				[2,5,8], [0,4,8], [6,4,2], [3,4,5], [1,4,7]];
	//Function to run on page load
		function start(){
		// Call function to add the X or O box listeners
		 addXandOListeners();
		// Call function to setup reset listener
		addResetListener();
		}
		// Call function to remove box listeners
	

		



	////////////////////////
	// 		Functions     //
	///////////////////////

	// The function to set up X or O listeners
	function addXandOListeners(){
		console.log('X and O function called');
		// Counting down in a for loop
		for (var i = $boxes.length -1; i >= 0; i--){
			var $box = $($boxes[i]);
			$box.on('click',addXorO);

		} 
	}

	//-------------------------------------------------------------//

	// The function to remove all the box's event listeners
	function removeXandOListeners(){
		for(var i = $boxes.length -1; i >= 0; i--){
			var $box = $($boxes[i]);
			$box.off('click',addXorO); // turns the box 'off'.

		}
	}

	//-------------------------------------------------------------//

	// The function to set up the reset function
	function addResetListener(){
		$('#reset').on('click',resetBoard)
	}

	//------------------------------------------------------------//

	// The function to add X or O to screen
	function addXorO(){
		// This is the box we clicked
		var $box = $(this);
		// Check if the box has already been played
		if($box.html().length === 0){
			// If the counter is even its O's
			if(counter % 2 === 0){
				// Take the data-num from the game square and push into Omoves array
				Omoves.push(parseInt($box.attr('data-num')));
				$box.html('O').attr('class', 'O');
				$turnText.html("It is X's turn");
				counter++;
				checkWin(Omoves, "O");
				console.log(Omoves);
			}else {
				Xmoves.push(parseInt($box.attr('data-num')));
				$box.html('X').attr('class', 'X');
				$turnText.html("It is O's turn");
				counter++;
				checkWin(Xmoves, "X");
				console.log(Xmoves);
			}
		// cater for a draw if counter >= 9 it's a draw
		if(counter >= 9){
			$turnText.html("Game over! - It's a Tie");
		}

		}
	}

	//------------------------------------------------------------//

	// Function to check win
	function checkWin(movesArray, name) {

		for(var i = 0; i < winningCombinations.length; i++){
			winCounter = 0;
			for(var j = 0; j < winningCombinations[i].length; j++){
				if(movesArray.indexOf(winningCombinations[i][j]) !== -1){
					winCounter++;
				}
				if(winCounter === 3) {
					$turnText.html('Game Over,' + name + ' wins!');
					removeXandOListeners();
				}
			}	
		}
	}



	//--------------------------------------------------------------//

	// The function to compare player moves and stored winning combos

	//--------------------------------------------------------------//

	// Function to do the reset of the board

	function resetBoard(){
		// Rest all boxes to the original state
		for (var i = $boxes.length - 1; i >= 0; i--){
			var $box = $($boxes[i]);
			$box.html("").attr("class", "clear");
		}

		// resetting all started variables
		Omoves = [];
		Xmoves = [];
		winCounter = 0;
		counter = 1;
		addXandOListeners();
		$turnText.html("It is X's turn");
	}


	start();




})