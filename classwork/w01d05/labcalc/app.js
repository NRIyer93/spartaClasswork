var x=0;
var y=0;
var result;
var calcchoice= prompt("Which calculator would you like to use (basic/advanced/BMI/Mortgage):");
 if(calcchoice=="basic"){
	x = parseInt(prompt("Enter first number"));
	y = parseInt(prompt("Enter second number"));
	var operation = prompt("What operation would you like to use (+ / - *)");

	switch(operation) {

		case "+" :
			result = x + y;
			alert("The result is: " + result);
		break;
		case "/" :
			result = x / y;
			alert("The result is: " + result);
		break;
		case "-" :
			result = x - y;
			alert("The result is: " + result);
		break;
		case "*" :
			result = x * y;
			alert("The result is: " + result);
		break;
		default :
			alert("Not an operation");

	}
}
else if (calcchoice=="advanced"){
	var choice = prompt("Square root or power (sqr/pwr)");

    switch(choice){
    	case "sqr":
    		x = parseInt(prompt("Enter number:"));
    		result= Math.sqrt(x);
    		alert("The result is: " + result);
    	break;
    	case "pwr":
    		x = parseInt(prompt("Enter first number:"));
			y = parseInt(prompt("Enter the exponent:"));
			result = x**y;
			alert("The result is: " + result);
		break;
    	default: 
    	alert("choice not recognised")
    }
	}else if(calcchoice == "BMI") {
    	x = parseFloat(prompt("What is your weight (kg)"));
    	y = parseFloat(prompt("What is your Height (m)"));
    	var yxpo = y**2;
    	result = x/yxpo;
    	console.log(result);

    		if( result > 0 && result <= 18.5)
    		{
    			alert("Your BMI " + result + " You are under weight")
    		}else if(result >= 18.5 &&  result <= 24.9)
    		{
    			alert("Your BMI " + result + " Congratulations! You are healthy")
    		}else if(result >= 25 && result <= 29.9)
    		{
    			alert("Your BMI " + result + " Sadly you need to lose some weight")
    		}else if(result >= 30)
    		{
    			alert("Your BMI " + result + " You really need to lose weight")
    		}else
    		{
    			alert("Your BMI " + result + " Error ")
    		}
    }else if(calcchoice == "Mortgage")
    {

    	x = parseFloat(prompt("What is your mortgage amount in pounds?"));
    	y = parseFloat(prompt("What is your interest rate?"));
    	var z = parseFloat(prompt("What is your mortgage period in months?"));
    	// result = (x / z) + ((x / z) * (y/100));
    	// alert("You will be paying a rate of: £ " + result.toFixed(2) + "per month");
    	  
    	var resultb = (y/100);
    	var resultc = (resultb ** (-z);
    	var resultd = 1 - resultc;
    	var resulte = resultb/resultd;
    	result = x*resulte; 
    	debugger
    	result = ((y/100)/resultc) * x;
    	//
    	// result = x*((y/100)/((1-(1+(y/100)))**(-z)));
    	alert("You will be paying a rate of: £ " + result.toFixed(2) + "per month");



    }else
    {
    	alert("Input error!");
    }





