require 'pp'
require 'mac/say'
# pp Mac::Say.voices

talker = Mac::Say.new(voice: :zarvox, rate: 300)
talker.say string: "Hi, my name is Naren"


# puts "Hi, This is about as basic as Ruby script can be. Hope you enjoy it. Right, I'm off";
