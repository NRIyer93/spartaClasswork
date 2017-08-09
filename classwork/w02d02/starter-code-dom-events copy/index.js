// write code here
document.addEventListener('DOMContentLoaded', function() {

var button = document.getElementById('myButton');

function buttonClicked() {

	console.log('Button was clicked');
}

button.addEventListener('click', buttonClicked);

var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(event){
	console.log(this);
	event.preventDefault();
	console.log('Form submitted');
	});



})


