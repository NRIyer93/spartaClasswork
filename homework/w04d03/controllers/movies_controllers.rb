class MoviesControllers < Sinatra::Base 

	$movies = [
		{
			id: 0,
			title: "Shawshank Redemption",
			content: "jajajaja",
		},

		{
			id: 1,
			title: "Blood Diamond",
			content: "jajajaja",
		},

		{
			id: 2,
			title: "This Is The End",
			content: "jajajaja",
		}
	]

	set :root, File.join(File.dirname(__FILE__), '..')

	set :views, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do
		"INDEX"
		@title = "Movie Reviews"
		@movies = $movies
		erb :'movies/index'
	end

	get '/new' do
		"NEW"
	end

	post '/' do
		"CREATE"
	end

	get '/:id/edit' do
		"EDIT"
	end

	get '/:id' do
		"SHOW"
		id = params[:id].to_i
		@movie = $movies[id]
		erb :'movies/show'
	end

	put '/:id' do
		"UPDATE"
	end

	delete '/:id' do
		"DESTROY"
	end


end