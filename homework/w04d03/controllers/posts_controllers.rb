class PostControllers < Sinatra::Base 



	set :root, File.join(File.dirname(__FILE__), '..')

	set :view, Proc.new { File.join(root, 'views') }

	configure :development do
		register Sinatra::Reloader
	end

	get '/' do
		"INDEX"
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