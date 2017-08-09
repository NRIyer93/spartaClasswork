// var selected = document.querySelectorAll('li.selected');
// console.log(selected);

// selected[1].innerHTML = 'HELLO';

// for(var i = 0; i < selected.length; i++) {

// 	selected[i].innerHTML = 'HELLO';
// }


// adding a new element

// var pTag = document.createElement('p');

// pTag.innerHTML = 'Hello, this is a new p tag';

// document.getElementById('wrapper').appendChild(pTag);

var list = ["Niall", "Ollie", "Richard", "Steve", "Tim", "Lexie", "Rob", "Kieron"];

var ul = document.getElementById('list');

// create a loop to call addNewLi for every name in the list

for (i = 0; i < list.length; i++) {

	addNewLi(list[i]);
}

// Set the class of every other list item to be “even”
var allLi = document.getElementsByTagName('li');

for (var i = 0; i < allLi.length; i++) {
	if (i % 2 === 0) {
			allLi[i].classList.add('even');
	}
}
// Set the count span to be the number of list items.
var countSpan = document.getElementById('count');
countSpan.innerHTML = allLi.length;


function addNewLi(text) {

	var newLi = document.createElement('li');
	newLi.innerHTML = text;
	ul.appendChild(newLi);
}

//addNewLi("Hello");