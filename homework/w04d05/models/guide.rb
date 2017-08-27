class Guide
	attr_accessor :id, :title, :content

	def self.open_connection
		PG.connect(dbname: "guide")
	end

	def self.hydrate data
		guide = Guide.new
		guide.id = data['id']
		guide.title = data['title']
		guide.content = data['content']

		guide
	end

	def self.all 
		conn = self.open_connection
		sql = "SELECT id, title, content FROM guide ORDER BY id"
		results = conn.exec(sql)

		guides = results.map do |result|
			self.hydrate result
		end

		guides
	end

	def self.find id
		conn = self.open_connection
		sql = "SELECT id, title, content FROM guide WHERE id = #{id} LIMIT 1"
		guides = conn.exec(sql)

		guide = self.hydrate guides[0]

		guide
	end

	def save
		conn = Post.open_connection
		if (!self.id)
			sql = "INSERT INTO guide (title, content) VALUES ('#{self.title}', '#{self.content}')"
		else
			sql = "UPDATE guide SET title='#{self.title}', content='#{self.content}' WHERE id = #{self.id}"
		end

		conn.exec(sql)
	end

end