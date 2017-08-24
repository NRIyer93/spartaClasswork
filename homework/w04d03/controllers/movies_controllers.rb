class MoviesControllers < Sinatra::Base 

	$movies = [
		{
			id: 0,
			title: "Shawshank Redemption",
			image: ,
			content: "A severely underrated film full of suspense.",
		},

		{
			id: 1,
			title: "Blood Diamond",
			image: ,
			content: "A moving and graphic representation of the illegal Diamond
			trade in Sierra Leone",
		},

		{
			id: 2,
			title: "This Is The End",
			image: ,
			content: "A thoroughly hilarious ensemble cast portraying parodied versions
			of themselves doing their best to survive during the Apocalypse.",
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