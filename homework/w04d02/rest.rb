require "sinatra"
require "sinatra/reloader" if development?

get "/movies" do 
	"INDEX"
end

get "/movies/new" do
	"NEW"
end

post "/movies" do 
	"CREATE"
end

















# get "/movies/:id" do

# end