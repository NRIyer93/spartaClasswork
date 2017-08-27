class GuidesController < Sinatra::Base 

	set :root, File.join(File.dirname(__FILE__), '..')

	set :views, Proc.new { File.join(root, 'views') }

	configure :development do 
		register Sinatra::Reloader
	end

	get '/' do
		@title = "Travel Guides"

		@guides = Guide.all

		erb :'guides/index'
	end 

	get '/new' do
		@guide = Guide.new
		@guide.id = ""
		@guide.title = ""
		@guide.content = ""

		erb :'guides/new'

	end

	get '/:id' do
		id = params[:id].to_i

		@guide = Guide.find id

		erb :'guides/show'
	end

	post '/' do
		guide = Guide.new
		guide.title = params[:title]
		guide.content = params[:content]

		guide.save

		redirect '/'
	end

end