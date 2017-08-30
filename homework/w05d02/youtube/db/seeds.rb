# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Video.destroy_all
Video.create([
	{title: "Ella Fitzgerald - It Don't Mean A Thing", description:'A classic jazz number', url: "https://www.youtube.com/embed/lMFIejZgJSM"},
	{title: "Best of Happy Gilmore", description: 'A compilation of scenes from Happy Gilmore', url: "https://www.youtube.com/embed/_Rsq8xYYCDU"},
	{title: "Game of Thrones Bloopers", description: 'Blooper reel from Game of Thrones Season 6', url: "https://www.youtube.com/embed/8Wsb4b8CjRs"}
	])