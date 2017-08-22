# Squares
# side_length = 5
require_relative 'square.rb'
square = Square.new(5)

puts square.calculate_area

puts square.calculate_perimeter

puts square.scaled_area(10)

puts square.scaled_perimeter(10)

# puts square.scaled_perimeter

# area = calculate_area side_length
# perimeter = calculate_perimeter side_length

# puts "Area: #{area} Perimeter: #{perimeter}"

# # scale the square by a factor of 10
# side_length *= 10

# scaled_area = calculate_area side_length
# scaled_perimeter = calculate_perimeter side_length

# puts "Area: #{scaled_area} Perimeter: #{scaled_perimeter}"

