require 'sinatra'
require 'sinatra/reloader' if development?
require_relative './controller/recipes_controller.rb'
require ('bootstrap')

use Rack::Reloader

use Rack::MethodOverride

run RecipesController