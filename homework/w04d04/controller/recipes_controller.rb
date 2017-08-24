class RecipesController < Sinatra::Base
	$recipes = [
	{
		id: 0,
		title: "Devil's Food Cake",
		content: "jsjjjdj",
	},
	{
		id: 1,
		title: "Carbonara",
		content: "jdjdjdjdj",
	},
	{
		id: 2,
		title: "Lemon Drizzle",
		content: "jdjdjdjdj",
	}
]

	set :root, File.join(File.dirname(__FILE__), '..')

	set :views, Proc.new { File.join(root, 'views') }

	configure :development do 
		register Sinatra::Reloader
	end

	get '/' do
		"INDEX"
		@title = "Recipe Book"

		@recipes = $recipes

		erb :'recipes/index'
	end

	get '/:id' do
		id = params[:id].to_i
		@recipe = $recipes[id]
		erb :'recipes/show'
	end
end