class RecipesController < Sinatra::Base
	$recipes = [{
		
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
	}]

	set :root, File.join(File.dirname(__FILE__), '..')

	set :views, Proc.new { File.join(root, 'views') }

	configure :development do 
		register Sinatra::Reloader
	end

	# 7 routes start here
	get '/' do
		
		@title = "Recipe Book"

		@recipes = $recipes

		erb :'recipes/index'
	end

	get '/new' do
		
		@recipe = {
			id: "",
			title: "",
			content: ""
		}

		erb :'recipes/new'
	end
	
	get '/:id' do
		
		id = params[:id].to_i
		@recipe = $recipes[id]
		erb :'recipes/show'

	end

	post '/' do
		
		id = $recipes.length

		new_recipe = {
			id: id,
			title: params[:title],
			content: params[:content]
		}

		$recipes.push new_recipe

		redirect '/'
	
	end

	put '/:id' do
		id = params[:id].to_i
		recipe = $recipes[id]
		recipe[:title] = params[:title]
		recipe[:content] = params[:content]

		$recipes[id] = recipe

		redirect '/'
	
	end

	delete '/:id' do

		id = params[:id].to_i

		$recipes.delete_at(id)

		redirect '/'
	end

	get '/:id/edit' do
		id = params[:id].to_i
		@recipe = $recipes[id]
		erb :'recipes/edit'
	end


end