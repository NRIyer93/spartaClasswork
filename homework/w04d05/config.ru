require 'sinatra'
require 'sinatra/reloader' if development?
require 'pg'
require_relative './models/guides.rb'
require_relative './controllers/guides_controller.rb'

run GuidesController 


