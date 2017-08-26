class Guide
	attr_accessor :id, :title, :content

	def self.open_connection
		PG.connect(dbname: "blog")
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
			self.hydate result
		end

		guide
	end

	def self.find id
		conn = self.open_connection
		sql = "SELECT id, title, content FROM guide WHERE id = #{id} LIMIT 1"
		guides = conn.exec(sql)

		guide = self.hydate guides[0]

		guide
	end

	




end