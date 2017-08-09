//////////////////////////////
//		FIRST SECTION		//
//////////////////////////////

// set initial state variables
// find numbers
var numbers = document.getElementsByClassName('number');

// find operators
var operators = document.getElementsByClassName('operator');

// find equals button
var eq = document.getElementsByClassName('eq')[0];

// find clear
var clearDis = document.getElementsByClassName('clear')[0];

// display result
var displayField = document.getElementsByClassName('display')[0];

// variable for first number in calculation
var num1 = null;

// variable for second number in calculation
var num2 = null;

// variable for operator clicked
var operator = null;

// variable for answer of calculation
var result = null;
//////////////////////////////
//		SECOND SECTION	    //
//////////////////////////////

// setup event listeners
function setupEventListeners(){
	// numbers eventListener
	for(i = 0; i < numbers.length; i++){
	 	
	 	numbers[i].addEventListener('click', updateAndDisplayNumber)
	 }
	// operators eventListener
	for(i = 0; i < operators.length; i++){
		
		operators[i].addEventListener('click', updateAndDisplayOperator)
	}
	// equal eventListener
	eq.addEventListener('click', function(){
		calculation(num1, operator, num2);
	} )

	// clear eventListener
	clearDis.addEventListener('click', clearCal);
}
// functions for calculator
	// add
	function add(firstNum, secondNum){
		return firstNum + secondNum;
	}
	// subtract
	function subtract(firstNum, secondNum){
		return firstNum - secondNum;
	}
	// multiply
	function multiply(firstNum, secondNum){
		return firstNum * secondNum;
	}
	// divide
	function divide(firstNum, secondNum){
		return firstNum / secondNum;
	}
//////////////////
// calculations	//
/////////////////
function calculation(firstNum, operator1, secondNum){
	switch(operator){
		case "+":
			displayField.value = add(firstNum, secondNum);
			break;
		case "-":
			displayField.value = subtract(firstNum, secondNum);
			break;
		case "*":
			displayField.value = multiply(firstNum, secondNum);
			break;
		case "/":
			displayField.value = divide(firstNum, secondNum);
			break;

	}
}
/////////////////////
// clear calculator /
/////////////////////
function clearCal(){
	num1 = null;
	num2 = null;
	operator = null;
	displayField.value = "";
}
// display and store buttons clicked
function updateAndDisplayNumber(){
	var btn = this.value;
	displayField.value = btn;

	if(num1 === null) {
		num1 = parseFloat(btn);
		
	}else {
		num2 = parseFloat(btn);
		
	}
}
// display and store operator used
function updateAndDisplayOperator(){
	operator = this.value;
	displayField.value = operator;
}
setupEventListeners();





