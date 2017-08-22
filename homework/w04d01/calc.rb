def add_num(num1, num2) 
	result = num1 + num2
	return result
end

def sub_num(num1, num2)
	result = num1 - num2
	return result
end

def multiply(num1, num2)
	result = num1 * num2
	return result
end

def divide(num1, num2)
	result = num1 / num2
	return result
end

def user_choice
	puts "Choose an operation ( + , -, *, /, s, p)"
	op_choice = gets.chomp
	
	puts "Please enter first number"
	num1 = gets.chomp
	
	puts "Please enter second number"
	num2 = gets.chomp

	if op_choice == "+" 
	 result = num1.to_i + num2.to_i
	 puts result.to_i
	elsif op_choice == "-" 
	 result = num1.to_i - num2.to_i
	 puts result.to_i
	elsif op_choice == "*" 
	 result = num1.to_i * num2.to_i
	 puts result.to_i
	elsif op_choice == "/" 
	 result = num1.to_i / num2.to_i
	 puts result.to_f
	elsif op_choice == 's' 
	 result = Math.sqrt(num1.to_i)
	 puts result 
	# elsif op_choice == 
	 end
end

def trip_calc 
	puts "Whats the distance in miles?"
	distance = gets.chomp

	puts "Whats the miles-per-gallon(mpg)?"
	miles_per_gal = gets.chomp

	puts "cost per gallon?"
	cost_per_gal = gets.chomp

	puts "How about speed (mph)?"
	speed = gets.chomp

	time_result = distance.to_i / speed.to_i
	puts time_result 


end

def bmi_calc
	puts "Enter weight in kg"
	weight = gets.chomp

	puts "Enter height in meters"
	height = gets.chomp

	result = (weight.to_i) / ((height.to_f * height.to_f))
	puts result 
	if result < 16
		puts "Underweight"
	elsif result > 18.5 and result < 25
		puts "Normal"
	elsif result > 25 and result < 30
		puts "Overweight"
	else
		puts "Obese"
	end
end


def options()
	
	if op_choice == "+" then
		user_choice(num1, num2)
		add_num(num1, num2)
	end
end

def calc_choice
	puts "Select calculator: 1 for standard, 2 for bmi, 3 for trip"
	decision = gets.chomp

	if decision === '1' then
		user_choice()
	elsif decision === '2' then
		bmi_calc()
	elsif decision === '3' then
		trip_calc()
	end
end
		
calc_choice







