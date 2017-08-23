class MoviesControllers < Sinatra::Base 

	$movies = [
		{
			id: 0,
			title: "Shawshank Redemption",
			content: ""
		},

		{
			id: 1,
			title: "Blood Diamond"
			content: ""
		},

		{
			id: 2,
			title: "This Is The End"
			content: ""
		}
	]

	set :root, File.join(File.dirname(__FILE__), '..')

	set :view, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do
		"INDEX"

		erb :'movies/index'
	end

	get '/new' do
		"NEW"
	end

	post '/' do
		"CREATE"
	end

	get '/:id/edit'
		"EDIT"
	end

	get '/:id' do
		"SHOW"
	end

	put '/:id' do
		"UPDATE"
	end

	delete '/:id' do
		"DESTROY"
	end

end