#app.rb
require 'rubygems'
require 'bundler'
Bundler.require(:default)

configure do
  #put configure settings here
end

get '/' do
  erb :index
end
