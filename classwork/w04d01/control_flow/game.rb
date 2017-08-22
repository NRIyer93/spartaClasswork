puts "Welcome to Water Front, what's your name?"
name = gets.chomp

puts "Whilst you are holidaying in a tropical location, a tsunami crashes into the beach resort!"
puts "Do you finish beer first (FB) or take your family and run (RUN)?"
answer1 = gets.chomp

if answer1 == "FB" 
	puts "That must have been an expensive beer"
elsif answer1 == "RUN"
	puts "Good decision! RUN!"
else
	puts "Invalid response"
end

puts "Whilst fleeing you come across a family of three stranded on the ruins of a
	  collapsed bridge. There is also a helicopter a short distance away from you"
puts "Do you swim into the dangerous waters (SWIM) or catch the helicopter (FLY)?"
answer2 = gets.chomp

if answer2 == "SWIM" 
	puts "You are a fool but a brave fool"
elsif answer2 == "FLY"
	puts "Smart decision"
else
	puts "Invalid response"
end

if answer2.eql? "SWIM" then puts "You have been swept away by the strong current! Don't be a hero ladies and gentlemen."
if answer2.eql? "FLY" then puts "You fly away. Alls well that ends well"	
