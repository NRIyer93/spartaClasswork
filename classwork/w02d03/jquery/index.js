$(function(event){
	console.log('DOM is ready');
	var count = $("#count");
	var items = $("li");
	var done = $("li.done");
	console.log(done);

	var li = $("<li>NewItem</li>");

	$("#list").append(li);

	var thingsToDo = ["Sort life out", "pay bills", "do something else"];

	// This is essentially the for loop from JavaScript
	// The second parameter must be singular
	$(thingsToDo).each(function(index, thing){
		if(index === 1){
			console.log(thing);
		}
	})

	var a = $("#count").html(); // gets the html
	$("#count").html('5');

	$("#count").css("color", "red");

	$("li").addClass("done");

	$("#count").html('10').css("color", "grey");

	var button = $((("<button id=\"myButton\">Click</button>");
	$("body").append(button);

	$("#myButton").on('click', function(){
		console.log("Button clicked");
	})


	
})