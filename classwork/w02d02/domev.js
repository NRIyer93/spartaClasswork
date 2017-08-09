document.addEventListener('DOMContentLoaded', function() {
	var myForm = document.getElementById('myForm');
	myForm.addEventListener('submit', function(event){
	
	event.preventDefault();
	var firstnameField = document.getElementById('firstname');
	console.log(firstnameField);
	if(!firstnameField.value) {
			console.log('you must enter something');
	}

}

var myForm = document.getElementById()


})
// var button = document.getElementById('myButton');

// function buttonClicked() {

// 	console.log('Button was clicked');

// button.addEventListener('click', buttonClicked);

// var myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', function(event){
	
// 	event.preventDefault();
// 	var firstnameField = document.getElementById('firstname');
// 	console.log(firstnameField);
// 	if(!firstnameField.value) {
// 			console.log('you must enter something');
// 	}
// })