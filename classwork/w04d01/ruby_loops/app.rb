# loop do 
# 	puts "Me forever"
# end

# i = 0

# while i < 10 do
# 	puts "while: #{i}"
# 	i+=1
# end

# j = 0
# begin
# 	puts "do while: #{j}"
# 	j+=1
# end while j < 10 

# i = 0

# until i > 10 do
# 	puts "Until: #{i}"
# 	i+=1
# end 

for i in 0..5
	puts "For loops are awesome: #{i}"
end

3.times do
	puts "3 times"
end

(0..5).each do |i|
	puts "Each: #{i}"
end

class_array = ["Will", "Divesh", "Kane", "Joe", "Melinda","Melson", "Sabz","Naz"]

class_array.each do |name|
	puts "Class: #{class_array}"
end

some_words = ["Tinker", "Tailor", "Soldier", "Sailor"]
new_words = some_words.map! do |word|
	word.reverse
end

puts new_words

some_numbers = [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20]

sum = some_numbers.reduce do |total, number|
	total + number 
end 

puts sum





