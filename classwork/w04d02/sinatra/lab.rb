require 'sinatra'
require 'sinatra/reloader' if development?

get '/books' do
	"index"
end

get '/books/:id' do
	"specific"
end

post '/books' do
	"create"
end

get '/books/:id/edit' do
	"edit"
end

# delete '/books/:id' do
# 	"remove"
# end

# get '/books/new' do
# 	"get new books"
# end

# put '/books/:id' do
# 	"update photo"
# end


