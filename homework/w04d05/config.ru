require 'sinatra'
require 'sinatra/reloader' if development?
require 'pg'
require_relative './models/guide.rb'
require_relative './controllers/guides_controller.rb'

use Rack::MethodOverride
run GuidesController 


