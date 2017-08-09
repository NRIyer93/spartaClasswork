// Setup eventListeners
document.addEventListener('DOMContentLoaded', function() {
var button = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
var display = document.getElementsByClassName('display')[0];
var eval = document.getElementsByClassName('eq');
//var num1, num2;

// event listener for numbers
for(var i = 0; i < button.length; i++) {
	 	var b = button[i];
	b.addEventListener('click', function(event) {
	console.log(this.value + ' was clicked');
	var display = document.getElementsByClassName('display')[0].value = this.value;
	})
}
// event listener for operators
for(i=0; i<operators.length; i++) {
    var b = operators[i];
    b.addEventListener('click', function(event){
	console.log(this.value +' was clicked');
    })
}
// event listener for equals
for(i=0; i<eval.length;i++) {
	var b = eval[i];
	b.addEventListener('click', function(event){
	console.log(this.value +' was clicked');
	var eval = document.getElementsByClassName('eq').value = this.value;
	})
}
// Functions for calculator
function addNumbers(num1, num2) {
	//num1 = document.getElementsByClassName('number').value;
    //num2 = document.getElementsByClassName('number').value;
    
	console.log(parseInt(result));
}


})
