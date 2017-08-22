class Square 
	attr_accessor :length

	def initialize(length) 
		self.length = length
	end

	def calculate_area 
	  	self.length ** 2
	end

	def calculate_perimeter
	  	self.length * 4
	end

	def scaled_area(factor)
		self.length *= factor
		calculate_area
	end

	def scaled_perimeter(factor)
		self.length  *= factor
		calculate_perimeter
	end
end