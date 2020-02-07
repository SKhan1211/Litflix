# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

action_movie_1 = Movie.create({
  title: 'John Wick: Chapter 3 - Parabellum', 
  description: 'John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.', 
  year: 2019, 
  length: '2h 11m', 
  rating: 'R', 
  starring_actors: 'Keanu Reeves, Halle Berry', 
  genre: 'Action'
})

action_movie_1.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Action/jwch3.mp4"), filename: 'JohnWick3.mp4')
action_movie_1.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Action/jw3tc.jpg"), filename: 'JohnWick3.jpg')

action_movie_2 = Movie.create({
  title: 'Avengers: Endgame', 
  description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.', 
  year: 2019, 
  length: '3h 1m', 
  rating: 'PG-13', 
  starring_actors: 'Robert Downey Jr., Chris Evans', 
  genre: 'Action'
})

action_movie_2.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Action/msae.mp4"), filename: 'AvengersEndgame.mp4')
action_movie_2.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Action/aegtc.jpg"), filename: 'AvengersEndgame.jpg')

action_movie_3 = Movie.create({
  title: 'Terminator: Dark Fate', 
  description: 'An augmented human and Sarah Connor must stop an advanced liquid Terminator, from hunting down a young girl, whose fate is critical to the human race.', 
  year: 2019, 
  length: '2h 8m', 
  rating: 'R', 
  starring_actors: 'Linda Hamilton, Arnold Schwarzenegger', 
  genre: 'Action'
})

action_movie_3.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Action/tdf.mp4"), filename: 'Terminator.mp4')
action_movie_3.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Action/tdftc.png"), filename: 'Terminator.png')

action_movie_4 = Movie.create({
  title: 'Fast & Furious Presents: Hobbs & Shaw', 
  description: 'Lawman Luke Hobbs (Dwayne The Rock Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.', 
  year: 2019, 
  length: '2h 17m', 
  rating: 'PG-13', 
  starring_actors: 'Dwayne Johsnon, Jason Statham', 
  genre: 'Action'
})

action_movie_4.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Action/has.mp4"), filename: 'Hobbs&Shaw.mp4')
action_movie_4.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Action/hastc.jpg"), filename: 'HobbsAndShaw.jpg')

action_movie_5 = Movie.create({
  title: 'Captain Marvel', 
  description: 'Carol Danvers becomes one of the universes most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.', 
  year: 2019, 
  length: '2h 3m', 
  rating: 'PG-13', 
  starring_actors: 'Brie Larson, Samuel L. Jackson', 
  genre: 'Action'
})

action_movie_5.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Action/mscm.mp4"), filename: 'CaptainMarvel.mp4')
action_movie_5.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Action/cmtc.jpg"), filename: 'CaptainMarvel.jpg')

action_movie_6 = Movie.create({
  title: 'Gemini Man', 
  description: 'An over-the-hill hitman faces off against a younger clone of himself.', 
  year: 2019, 
  length: '1h 57m', 
  rating: 'PG-13', 
  starring_actors: 'Will Smith, Mary Elizabeth Winstead', 
  genre: 'Action'
})

action_movie_6.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Action/gm.mp4.mp4"), filename: 'GeminiMan.mp4')
action_movie_6.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Action/gmtc.jpg"), filename: 'GeminiMan.jpg')



# action_movies = Movie.create([
#   {
#     title: 'John Wick: Chapter 3 - Parabellum', 
#     description: 'John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.', 
#     year: 2019, 
#     length: '2h 11m', 
#     rating: 'R', 
#     starring_actors: 'Keanu Reeves, Halle Berry', 
#     genre: 'Action'
#   },
#   {
#     title: 'Avengers: Endgame', 
#     description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.', 
#     year: 2019, 
#     length: '3h 1m', 
#     rating: 'PG-13', 
#     starring_actors: 'Robert Downey Jr., Chris Evans', 
#     genre: 'Action'
#   },
#   {
#     title: 'Terminator: Dark Fate', 
#     description: 'An augmented human and Sarah Connor must stop an advanced liquid Terminator, from hunting down a young girl, whose fate is critical to the human race.', 
#     year: 2019, 
#     length: '2h 8m', 
#     rating: 'R', 
#     starring_actors: 'Linda Hamilton, Arnold Schwarzenegger', 
#     genre: 'Action'
#   },
#   {
#     title: 'Fast & Furious Presents: Hobbs & Shaw', 
#     description: 'Lawman Luke Hobbs (Dwayne "The Rock" Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.', 
#     year: 2019, 
#     length: '2h 17m', 
#     rating: 'PG-13', 
#     starring_actors: 'Dwayne Johsnon, Jason Statham', 
#     genre: 'Action'
#   },
#   {
#     title: 'Captain Marvel', 
#     description: 'Carol Danvers becomes one of the universes most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.', 
#     year: 2019, 
#     length: '2h 3m', 
#     rating: 'PG-13', 
#     starring_actors: 'Brie Larson, Samuel L. Jackson', 
#     genre: 'Action'
#   },
#   {
#     title: 'Gemini Man', 
#     description: 'An over-the-hill hitman faces off against a younger clone of himself.', 
#     year: 2019, 
#     length: '1h 57m', 
#     rating: 'PG-13', 
#     starring_actors: 'Will Smith, Mary Elizabeth Winstead', 
#     genre: 'Action'
#   }
# ])

adventure_movie_1 = Movie.create({
  title: 'Shazam!', 
  description: 'A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.', 
  year: 2019, 
  length: '2h 12m', 
  rating: 'PG-13', 
  starring_actors: 'Zachary Levi, Mark Strong', 
  genre: 'Adventure'
})

adventure_movie_1.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Adventure/shaz.mp4"), filename: 'Shazam.mp4')
adventure_movie_1.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Adventure/stc.jpg"), filename: 'Shazam.jpg')

adventure_movie_2 = Movie.create({
  title: 'Maleficent: Mistress of Evil', 
  description: 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.', 
  year: 2019, 
  length: '1h 59m', 
  rating: 'PG', 
  starring_actors: 'Angelina Jolie, Elle Fanning', 
  genre: 'Adventure'
})

adventure_movie_2.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Adventure/mmof.mp4"), filename: 'Maleficient.mp4')
adventure_movie_2.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Adventure/mmoftc.jpg"), filename: 'Maleficient.jpg')

adventure_movie_3 = Movie.create({
  title: 'Abominable', 
  description: 'Three teenagers must help a Yeti return to his family while avoiding a wealthy man and a zoologist who want it for their own needs.', 
  year: 2019, 
  length: '1h 37m', 
  rating: 'PG', 
  starring_actors: 'Chloe Bennet, Albert Tsai', 
  genre: 'Adventure'
})

adventure_movie_3.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Adventure/abom.mp4"), filename: 'Abominable.mp4')
adventure_movie_3.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Adventure/atc.jpg"), filename: 'Abominable.jpg')

adventure_movie_4 = Movie.create({
  title: 'The Lion King', 
  description: 'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.', 
  year: 2019, 
  length: '1h 58m', 
  rating: 'PG', 
  starring_actors: 'Donald Glover, Beyonce', 
  genre: 'Adventure'
})

adventure_movie_4.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Adventure/tlk.mp4"), filename: 'LionKing.mp4')
adventure_movie_4.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Adventure/dtlk.jpeg"), filename: 'LionKing.jpeg')

adventure_movie_5 = Movie.create({
  title: 'The Secret Life of Pets 2', 
  description: 'Continuing the story of Max and his pet friends, following their secret lives after their owners leave them for work or school each day.', 
  year: 2019, 
  length: '1h 26m', 
  rating: 'PG', 
  starring_actors: 'Patton Oswalt, Kevin Hart', 
  genre: 'Adventure'
})

adventure_movie_5.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Adventure/slop2.mp4"), filename: 'Pets2.mp4')
adventure_movie_5.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Adventure/slop2.jpg"), filename: 'Pets2.jpg')

adventure_movie_6 = Movie.create({
  title: 'The Aeronauts', 
  description: 'Balloon pilot Amelia Wren and scientist James Glaisher find themselves in an epic fight for survival while attempting to make discoveries in a gas balloon in the 1860s.', 
  year: 2019, 
  length: '1h 40m', 
  rating: 'PG-13', 
  starring_actors: 'Felicity Jones, Eddie Redmayne', 
  genre: 'Adventure'
})

adventure_movie_6.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Adventure/aero.mp4"), filename: 'Aeronauts.mp4')
adventure_movie_6.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Adventure/antc.jpg"), filename: 'Aeronauts.jpg')



# adventure_movies = Movie.create([
#   {
#     title: 'Shazam!', 
#     description: 'A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.', 
#     year: 2019, 
#     length: '2h 12m', 
#     rating: 'PG-13', 
#     starring_actors: 'Zachary Levi, Mark Strong', 
#     genre: 'Adventure'
#   },
#   {
#     title: 'Maleficent: Mistress of Evil', 
#     description: 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.', 
#     year: 2019, 
#     length: '1h 59m', 
#     rating: 'PG', 
#     starring_actors: 'Angelina Jolie, Elle Fanning', 
#     genre: 'Adventure'
#   },
#   {
#     title: 'Abominable', 
#     description: 'Three teenagers must help a Yeti return to his family while avoiding a wealthy man and a zoologist who want it for their own needs.', 
#     year: 2019, 
#     length: '1h 37m', 
#     rating: 'PG', 
#     starring_actors: 'Chloe Bennet, Albert Tsai', 
#     genre: 'Adventure'
#   },
#   {
#     title: 'The Lion King', 
#     description: 'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.', 
#     year: 2019, 
#     length: '1h 58m', 
#     rating: 'PG', 
#     starring_actors: 'Donald Glover, Beyonce', 
#     genre: 'Adventure'
#   },
#   {
#     title: 'The Secret Life of Pets 2', 
#     description: 'Continuing the story of Max and his pet friends, following their secret lives after their owners leave them for work or school each day.', 
#     year: 2019, 
#     length: '1h 26m', 
#     rating: 'PG', 
#     starring_actors: 'Patton Oswalt, Kevin Hart', 
#     genre: 'Adventure'
#   },
#   {
#     title: 'The Aeronauts', 
#     description: 'Balloon pilot Amelia Wren and scientist James Glaisher find themselves in an epic fight for survival while attempting to make discoveries in a gas balloon in the 1860s.', 
#     year: 2019, 
#     length: '1h 40m', 
#     rating: 'PG-13', 
#     starring_actors: 'Felicity Jones, Eddie Redmayne', 
#     genre: 'Adventure'
#   }
# ])

comedy_movie_1 = Movie.create({
  title: 'Booksmart', 
  description: 'On the eve of their high school graduation, two academic superstars and best friends realize they should have worked less and played more. Determined not to fall short of their peers, the girls try to cram four years of fun into one night.', 
  year: 2019, 
  length: '1h 42m', 
  rating: 'R', 
  starring_actors: 'Kaitlyn Dever, Beanie Feldstein', 
  genre: 'Comedy'
})

comedy_movie_1.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Comedy/bs.mp4"), filename: 'Booksmart.mp4')
comedy_movie_1.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Comedy/bstc.jpeg"), filename: 'Booksmart.jpeg')

comedy_movie_2 = Movie.create({
  title: 'Toy Story 4', 
  description: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.', 
  year: 2019, 
  length: '1h 40m', 
  rating: 'G', 
  starring_actors: 'Tom Hanks, Tim Allen', 
  genre: 'Comedy'
})

comedy_movie_2.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Comedy/toystory4.mp4"), filename: 'ToyStory4.mp4')
comedy_movie_2.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Comedy/ts4tc.jpg"), filename: 'ToyStory4.jpg')

comedy_movie_3 = Movie.create({
  title: 'Parasite', 
  description: 'All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.', 
  year: 2019, 
  length: '2h 12m', 
  rating: 'R', 
  starring_actors: 'Kang-ho Song, Sun-kyun Lee', 
  genre: 'Comedy'
})

comedy_movie_3.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Comedy/parasite.mp4"), filename: 'Parasite.mp4')
comedy_movie_3.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Comedy/pstc.jpeg"), filename: 'Parasite.jpeg')

comedy_movie_4 = Movie.create({
  title: 'Good Boys', 
  description: 'Three 6th grade boys ditch school and embark on an epic journey while carrying accidentally stolen drugs, being hunted by teenage girls, and trying to make their way home in time for a long-awaited party.', 
  year: 2019, 
  length: '1h 30m', 
  rating: 'R', 
  starring_actors: 'Jacob Tremblay, Keith L. Williams', 
  genre: 'Comedy'
})

comedy_movie_4.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Comedy/goodboys.mp4"), filename: 'GoodBoys.mp4')
comedy_movie_4.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Comedy/gbtc.jpg"), filename: 'GoodBoys.jpg')

comedy_movie_5 = Movie.create({
  title: 'Long Shot', 
  description: 'Journalist Fred Flarsky reunites with his childhood crush, Charlotte Field, now one of the most influential women in the world. As she prepares to make a run for the Presidency, Charlotte hires Fred as her speechwriter and sparks fly.', 
  year: 2019, 
  length: '2h 5m', 
  rating: 'R', 
  starring_actors: 'Charlize Theron, Seth Rogen', 
  genre: 'Comedy'
})

comedy_movie_5.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Comedy/longshot.mp4"), filename: 'LongShot.mp4')
comedy_movie_5.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Comedy/lstc.jpg"), filename: 'LongShot.jpg')

comedy_movie_6 = Movie.create({
  title: 'Isnt It Romantic', 
  description: 'A young woman disenchanted with love mysteriously finds herself trapped inside a romantic comedy.', 
  year: 2019, 
  length: '1h 29m', 
  rating: 'PG-13', 
  starring_actors: 'Rebel Wilson, Liam Hemsworth', 
  genre: 'Comedy'
})

comedy_movie_6.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Comedy/iir.mp4"), filename: 'IsntItRomantic.mp4')
comedy_movie_6.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Comedy/iirtc.jpg"), filename: 'IsntItRomantic.jpg')



# comedy_movies = Movie.create([
#   {
#     title: 'Booksmart', 
#     description: 'On the eve of their high school graduation, two academic superstars and best friends realize they should have worked less and played more. Determined not to fall short of their peers, the girls try to cram four years of fun into one night.', 
#     year: 2019, 
#     length: '1h 42m', 
#     rating: 'R', 
#     starring_actors: 'Kaitlyn Dever, Beanie Feldstein', 
#     genre: 'Comedy'
#   },
#   {
#     title: 'Toy Story 4', 
#     description: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.', 
#     year: 2019, 
#     length: '1h 40m', 
#     rating: 'G', 
#     starring_actors: 'Tom Hanks, Tim Allen', 
#     genre: 'Comedy'
#   },
#   {
#     title: 'Parasite', 
#     description: 'All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.', 
#     year: 2019, 
#     length: '2h 12m', 
#     rating: 'R', 
#     starring_actors: 'Kang-ho Song, Sun-kyun Lee', 
#     genre: 'Comedy'
#   },
#   {
#     title: 'Good Boys', 
#     description: 'Three 6th grade boys ditch school and embark on an epic journey while carrying accidentally stolen drugs, being hunted by teenage girls, and trying to make their way home in time for a long-awaited party.', 
#     year: 2019, 
#     length: '1h 30m', 
#     rating: 'R', 
#     starring_actors: 'Jacob Tremblay, Keith L. Williams', 
#     genre: 'Comedy'
#   },
#   {
#     title: 'Long Shot', 
#     description: 'Journalist Fred Flarsky reunites with his childhood crush, Charlotte Field, now one of the most influential women in the world. As she prepares to make a run for the Presidency, Charlotte hires Fred as her speechwriter and sparks fly.', 
#     year: 2019, 
#     length: '2h 5m', 
#     rating: 'R', 
#     starring_actors: 'Charlize Theron, Seth Rogen', 
#     genre: 'Comedy'
#   },
#   {
#     title: 'Isnt It Romantic', 
#     description: 'A young woman disenchanted with love mysteriously finds herself trapped inside a romantic comedy.', 
#     year: 2019, 
#     length: '1h 29m', 
#     rating: 'PG-13', 
#     starring_actors: 'Rebel Wilson, Liam Hemsworth', 
#     genre: 'Comedy'
#   }
# ])

drama_movie_1 = Movie.create({
  title: 'Once Upon a Time... in Hollywood', 
  description: 'A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywoods Golden Age in 1969 Los Angeles.', 
  year: 2019, 
  length: '2h 41m', 
  rating: 'R', 
  starring_actors: 'Leonardo DiCaprio, Brad Pitt', 
  genre: 'Drama'
})

drama_movie_1.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Drama/ouatih.mp4"), filename: 'OnceUponTimeHollywood.mp4')
drama_movie_1.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Drama/ouatihtc.jpg"), filename: 'OnceUponTimeHollywood.jpg')

drama_movie_2 = Movie.create({
  title: 'Joker', 
  description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.', 
  year: 2019, 
  length: '2h 2m', 
  rating: 'R', 
  starring_actors: 'Todd Phillips, Scott Silver', 
  genre: 'Drama'
})

drama_movie_2.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Drama/joker.mp4"), filename: 'Joker.mp4')
drama_movie_2.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Drama/jktc.jpeg"), filename: 'Joker.jpeg')

drama_movie_3 = Movie.create({
  title: 'The Irishman', 
  description: 'A mob hitman recalls his friend Jimmy Hoffa.', 
  year: 2019, 
  length: '3h 29m', 
  rating: 'R', 
  starring_actors: 'Robert De Niro, Al Pacino', 
  genre: 'Drama'
})

drama_movie_3.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Drama/irishman.mp4"), filename: 'TheIrishman.mp4')
drama_movie_3.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Drama/timtc.jpg"), filename: 'TheIrishman.jpg')

drama_movie_4 = Movie.create({
  title: 'Ford v Ferrari', 
  description: 'American car designer Carroll Shelby and driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary race car for Ford and challenge Ferrari at the 24 Hours of Le Mans in 1966.', 
  year: 2019, 
  length: '2h 32m', 
  rating: 'PG-13', 
  starring_actors: 'Matt Damon, Christian Bale', 
  genre: 'Drama'
})

drama_movie_4.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Drama/fordvferr.mp4"), filename: 'FordvFerrari.mp4')
drama_movie_4.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Drama/fvftc.jpg"), filename: 'FordvFerrari.jpg')

drama_movie_5 = Movie.create({
  title: 'Rocketman', 
  description: 'A musical fantasy about the fantastical human story of Elton Johns breakthrough years.', 
  year: 2019, 
  length: '2h 1m', 
  rating: 'R', 
  starring_actors: 'Taron Egerton, Jamie Bell', 
  genre: 'Drama'
})

drama_movie_5.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Drama/rocketman.mp4"), filename: 'Rocketman.mp4')
drama_movie_5.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Drama/rmtc.jpg"), filename: 'Rocketman.jpg')

drama_movie_6 = Movie.create({
  title: 'Marriage Story', 
  description: 'Noah Baumbachs incisive and compassionate look at a marriage breaking up and a family staying together.', 
  year: 2019, 
  length: '2h 17m', 
  rating: 'R', 
  starring_actors: 'Adam Driver, Scarlett Johansson', 
  genre: 'Drama'
})

drama_movie_6.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Drama/marrstory.mp4"), filename: 'MarriageStory.mp4')
drama_movie_6.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Drama/mrtc.jpg"), filename: 'MarriageStory.jpg')



# drama_movies = Movie.create([
#   {
#     title: 'Once Upon a Time... in Hollywood', 
#     description: 'A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywoods Golden Age in 1969 Los Angeles.', 
#     year: 2019, 
#     length: '2h 41m', 
#     rating: 'R', 
#     starring_actors: 'Leonardo DiCaprio, Brad Pitt', 
#     genre: 'Drama'
#   },
#   {
#     title: 'Joker', 
#     description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.', 
#     year: 2019, 
#     length: '2h 2m', 
#     rating: 'R', 
#     starring_actors: 'Todd Phillips, Scott Silver', 
#     genre: 'Drama'
#   },
#   {
#     title: 'The Irishman', 
#     description: 'A mob hitman recalls his friend Jimmy Hoffa.', 
#     year: 2019, 
#     length: '3h 29m', 
#     rating: 'R', 
#     starring_actors: 'Robert De Niro, Al Pacino', 
#     genre: 'Drama'
#   },
#   {
#     title: 'Ford v Ferrari', 
#     description: 'American car designer Carroll Shelby and driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary race car for Ford and challenge Ferrari at the 24 Hours of Le Mans in 1966.', 
#     year: 2019, 
#     length: '2h 32m', 
#     rating: 'PG-13', 
#     starring_actors: 'Matt Damon, Christian Bale', 
#     genre: 'Drama'
#   },
#   {
#     title: 'Rocketman', 
#     description: 'A musical fantasy about the fantastical human story of Elton Johns breakthrough years.', 
#     year: 2019, 
#     length: '2h 1m', 
#     rating: 'R', 
#     starring_actors: 'Taron Egerton, Jamie Bell', 
#     genre: 'Drama'
#   },
#   {
#     title: 'Marriage Story', 
#     description: 'Noah Baumbachs incisive and compassionate look at a marriage breaking up and a family staying together.', 
#     year: 2019, 
#     length: '2h 17m', 
#     rating: 'R', 
#     starring_actors: 'Adam Driver, Scarlett Johansson', 
#     genre: 'Drama'
#   }
# ])

horror_movie_1 = Movie.create({
  title: 'Midsommar', 
  description: 'A couple travels to Sweden to visit a rural hometowns fabled mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.', 
  year: 2019, 
  length: '2h 27m', 
  rating: 'R', 
  starring_actors: 'Florence Pugh, Jack Reynor', 
  genre: 'Horror'
})

horror_movie_1.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Horror/midsommar.mp4"), filename: 'Midsommar.mp4')
horror_movie_1.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Horror/mstc.jpg"), filename: 'Midsommar.jpg')

horror_movie_2 = Movie.create({
  title: 'Scary Stories to Tell in the Dark', 
  description: 'On Halloween 1968, reclusive Stella and her two friends meet a mysterious drifter, Ramón, and uncover a sinister notebook of stories.', 
  year: 2019, 
  length: '1h 48m', 
  rating: 'PG-13', 
  starring_actors: 'Zoe Margaret Colletti, Michael Garza', 
  genre: 'Horror'
})

horror_movie_2.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Horror/ssttitd.mp4"), filename: 'ScaryStoriesInDark.mp4')
horror_movie_2.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Horror/ssttidtc.jpg"), filename: 'ScaryStoriesInDark.jpg')

horror_movie_3 = Movie.create({
  title: 'Ready or Not', 
  description: 'A brides wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.', 
  year: 2019, 
  length: '1h 35m', 
  rating: 'R', 
  starring_actors: 'Samara Weaving, Adam Brody', 
  genre: 'Horror'
})

horror_movie_3.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Horror/readyornot.mp4"), filename: 'ReadyOrNot.mp4')
horror_movie_3.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Horror/rontc.jpg"), filename: 'ReadyOrNot.jpg')

horror_movie_4 = Movie.create({
  title: 'Annabelle Comes Home', 
  description: 'While babysitting the daughter of Ed and Lorraine Warren, a teenager and her friend unknowingly awaken an evil spirit trapped in a doll.', 
  year: 2019, 
  length: '1h 46m', 
  rating: 'R', 
  starring_actors: 'Vera Farmiga, Patrick Wilson', 
  genre: 'Horror'
})

horror_movie_4.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Horror/ach.mp4"), filename: 'AnnabelleComesHome.mp4')
horror_movie_4.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Horror/acmtc.jpg"), filename: 'AnnabelleComesHome.jpg')

horror_movie_5 = Movie.create({
  title: 'Doctor Sleep', 
  description: 'Years following the events of "The Shining," a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal.', 
  year: 2019, 
  length: '2h 32m', 
  rating: 'R', 
  starring_actors: 'Ewan McGregor, Rebecca Ferguson', 
  genre: 'Horror'
})

horror_movie_5.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Horror/doctorsleep.mp4"), filename: 'DoctorSleep.mp4')
horror_movie_5.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Horror/dstc.jpg"), filename: 'DoctorSleep.jpg')

horror_movie_6 = Movie.create({
  title: 'The Hole in the Ground', 
  description: 'A young mother living in the Irish countryside with her son suspects his increasingly disturbing behavior is linked to a mysterious sinkhole in the forest, and fears he may not be her son at all.', 
  year: 2019, 
  length: '1h 30m', 
  rating: 'R', 
  starring_actors: 'Seána Kerslake, James Quinn Markey', 
  genre: 'Horror'
})

horror_movie_6.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Horror/thitg.mp4"), filename: 'TheHoleInTheGround.mp4')
horror_movie_6.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Horror/thitgtc.jpg"), filename: 'TheHoleInTheGround.jpg')

# horror_movies = Movie.create([
#   {
#     title: 'Midsommar', 
#     description: 'A couple travels to Sweden to visit a rural hometowns fabled mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.', 
#     year: 2019, 
#     length: '2h 27m', 
#     rating: 'R', 
#     starring_actors: 'Florence Pugh, Jack Reynor', 
#     genre: 'Horror'
#   },
#   {
#     title: 'Scary Stories to Tell in the Dark', 
#     description: 'On Halloween 1968, reclusive Stella and her two friends meet a mysterious drifter, Ramón, and uncover a sinister notebook of stories.', 
#     year: 2019, 
#     length: '1h 48m', 
#     rating: 'PG-13', 
#     starring_actors: 'Zoe Margaret Colletti, Michael Garza', 
#     genre: 'Horror'
#   },
#   {
#     title: 'Ready or Not', 
#     description: 'A brides wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.', 
#     year: 2019, 
#     length: '1h 35m', 
#     rating: 'R', 
#     starring_actors: 'Samara Weaving, Adam Brody', 
#     genre: 'Horror'
#   },
#   {
#     title: 'Annabelle Comes Home', 
#     description: 'While babysitting the daughter of Ed and Lorraine Warren, a teenager and her friend unknowingly awaken an evil spirit trapped in a doll.', 
#     year: 2019, 
#     length: '1h 46m', 
#     rating: 'R', 
#     starring_actors: 'Vera Farmiga, Patrick Wilson', 
#     genre: 'Horror'
#   },
#   {
#     title: 'Doctor Sleep', 
#     description: 'Years following the events of "The Shining," a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal.', 
#     year: 2019, 
#     length: '2h 32m', 
#     rating: 'R', 
#     starring_actors: 'Ewan McGregor, Rebecca Ferguson', 
#     genre: 'Horror'
#   },
#   {
#     title: 'The Hole in the Ground', 
#     description: 'A young mother living in the Irish countryside with her son suspects his increasingly disturbing behavior is linked to a mysterious sinkhole in the forest, and fears he may not be her son at all.', 
#     year: 2019, 
#     length: '1h 30m', 
#     rating: 'R', 
#     starring_actors: 'Seána Kerslake, James Quinn Markey', 
#     genre: 'Horror'
#   }
# ])

scifi_movie_1 = Movie.create({
  title: 'Men in Black: International', 
  description: 'The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest threat to date: a mole in the Men in Black organization.', 
  year: 2019, 
  length: '1h 54m', 
  rating: 'PG-13', 
  starring_actors: 'Chris Hemsworth, Tessa Thompson', 
  genre: 'Sci-fi'
})

scifi_movie_1.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Sci-fi/mibi.mp4"), filename: 'MenInBlackInternational.mp4')
scifi_movie_1.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Sci-fi/mibtc.jpg"), filename: 'MenInBlackInternational.jpg')

scifi_movie_2 = Movie.create({
  title: 'Ad Astra', 
  description: 'Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.', 
  year: 2019, 
  length: '2h 3m', 
  rating: 'PG-13', 
  starring_actors: 'Brad Pitt, Tommy Lee Jones', 
  genre: 'Sci-fi'
})

scifi_movie_2.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Sci-fi/adastra.mp4"), filename: 'AdAstra.mp4')
scifi_movie_2.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Sci-fi/aatc.jpg"), filename: 'AdAstra.jpg')

scifi_movie_3 = Movie.create({
  title: 'Godzilla: King of the Monsters', 
  description: 'The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.', 
  year: 2019, 
  length: '2h 12m', 
  rating: 'PG-13', 
  starring_actors: 'Kyle Chandler, Vera Farmiga', 
  genre: 'Sci-fi'
})

scifi_movie_3.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Sci-fi/gkom.mp4"), filename: 'GodzillaKingOfMonsters.mp4')
scifi_movie_3.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Sci-fi/gkotmtc.jpg"), filename: 'GodzillaKingOfMonsters.jpg')

scifi_movie_4 = Movie.create({
  title: 'Alita: Battle Angel', 
  description: 'A deactivated cyborg is revived, but cannot remember anything of her past life and goes on a quest to find out who she is.', 
  year: 2019, 
  length: '2h 2m', 
  rating: 'PG-13', 
  starring_actors: 'Rosa Salazar, Christoph Waltz', 
  genre: 'Sci-fi'
})

scifi_movie_4.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Sci-fi/alita.mp4"), filename: 'AlitaBattleAngel.mp4')
scifi_movie_4.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Sci-fi/abatc.jpg"), filename: 'AlitaBattleAngel.jpg')

scifi_movie_5 = Movie.create({
  title: 'I Am Mother', 
  description: 'In the wake of humanitys extinction, a teenage girl is raised by a robot designed to repopulate the earth. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.', 
  year: 2019, 
  length: '1h 53m', 
  rating: 'TV-14', 
  starring_actors: 'Rose Byrne, Maddie Lenton', 
  genre: 'Sci-fi'
})

scifi_movie_5.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Sci-fi/iammother.mp4"), filename: 'IAmMother.mp4')
scifi_movie_5.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Sci-fi/iamtc.jpg"), filename: 'IAmMother.jpg')

scifi_movie_6 = Movie.create({
  title: 'Captive State', 
  description: 'Set in a Chicago neighborhood nearly a decade after an occupation by an extraterrestrial force, Captive State explores the lives on both sides of the conflict - the collaborators and dissidents.', 
  year: 2019, 
  length: '1h 49m', 
  rating: 'PG-13', 
  starring_actors: 'John Goodman, Ashton Sanders', 
  genre: 'Sci-fi'
})

scifi_movie_6.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Sci-fi/captivestate.mp4"), filename: 'CaptiveState.mp4')
scifi_movie_6.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Sci-fi/cstc.jpg"), filename: 'CaptiveState.jpg')

# scifi_movies = Movie.create([
#   {
#     title: 'Men in Black: International', 
#     description: 'The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest threat to date: a mole in the Men in Black organization.', 
#     year: 2019, 
#     length: '1h 54m', 
#     rating: 'PG-13', 
#     starring_actors: 'Chris Hemsworth, Tessa Thompson', 
#     genre: 'Sci-fi'
#   },
#   {
#     title: 'Ad Astra', 
#     description: 'Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.', 
#     year: 2019, 
#     length: '2h 3m', 
#     rating: 'PG-13', 
#     starring_actors: 'Brad Pitt, Tommy Lee Jones', 
#     genre: 'Sci-fi'
#   },
#   {
#     title: 'Godzilla: King of the Monsters', 
#     description: 'The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.', 
#     year: 2019, 
#     length: '2h 12m', 
#     rating: 'PG-13', 
#     starring_actors: 'Kyle Chandler, Vera Farmiga', 
#     genre: 'Sci-fi'
#   },
#   {
#     title: 'Alita: Battle Angel', 
#     description: 'A deactivated cyborg is revived, but cannot remember anything of her past life and goes on a quest to find out who she is.', 
#     year: 2019, 
#     length: '2h 2m', 
#     rating: 'PG-13', 
#     starring_actors: 'Rosa Salazar, Christoph Waltz', 
#     genre: 'Sci-fi'
#   },
#   {
#     title: 'I Am Mother', 
#     description: 'In the wake of humanitys extinction, a teenage girl is raised by a robot designed to repopulate the earth. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.', 
#     year: 2019, 
#     length: '1h 53m', 
#     rating: 'TV-14', 
#     starring_actors: 'Rose Byrne, Maddie Lenton', 
#     genre: 'Sci-fi'
#   },
#   {
#     title: 'Captive State', 
#     description: 'Set in a Chicago neighborhood nearly a decade after an occupation by an extraterrestrial force, Captive State explores the lives on both sides of the conflict - the collaborators and dissidents.', 
#     year: 2019, 
#     length: '1h 49m', 
#     rating: 'PG-13', 
#     starring_actors: 'John Goodman, Ashton Sanders', 
#     genre: 'Sci-fi'
#   }
# ])

romance_movie_1 = Movie.create({
  title: 'Yesterday', 
  description: 'A struggling musician realizes hes the only person on Earth who can remember The Beatles after waking up in an alternate timeline where they never existed.', 
  year: 2019, 
  length: '1h 56m', 
  rating: 'PG-13', 
  starring_actors: 'Himesh Patel, Lily James', 
  genre: 'Romance'
})

romance_movie_1.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Romance/yesterday.mp4"), filename: 'Yesterday.mp4')
romance_movie_1.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Romance/ytc.jpg"), filename: 'Yesterday.jpg')

romance_movie_2 = Movie.create({
  title: 'After', 
  description: 'A young woman falls for a guy with a dark secret and the two embark on a rocky relationship. Based on the novel by Anna Todd.', 
  year: 2019, 
  length: '1h 45m', 
  rating: 'PG-13', 
  starring_actors: 'Josephine Langford, Hero Fiennes Tiffin', 
  genre: 'Romance'
})

romance_movie_2.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Romance/after.mp4"), filename: 'After.mp4')
romance_movie_2.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Romance/atc.jpg"), filename: 'After.jpg')

romance_movie_3 = Movie.create({
  title: 'Someone Great', 
  description: 'After a devastating break up on the eve of her cross-country move, Jenny enjoys one last NYC adventure with her two best pals. Someone Great is a romantic comedy about love, loss, growth and the everlasting bond of female friendship.', 
  year: 2019, 
  length: '1h 32m', 
  rating: 'R', 
  starring_actors: 'Gina Rodriguez, LaKeith Stanfield', 
  genre: 'Romance'
})

romance_movie_3.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Romance/someonegreat.mp4"), filename: 'SomeoneGreat.mp4')
romance_movie_3.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Romance/sgtc.jpg"), filename: 'SomeoneGreat.jpg')

romance_movie_4 = Movie.create({
  title: 'Five Feet Apart', 
  description: 'A pair of teenagers with cystic fibrosis meet in a hospital and fall in love, though their disease means they must avoid close physical contact.', 
  year: 2019, 
  length: '1h 56m', 
  rating: 'PG-13', 
  starring_actors: 'Haley Lu Richardson, Cole Sprouse', 
  genre: 'Romance'
})

romance_movie_4.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Romance/ffa.mp4"), filename: 'FiveFeetApart.mp4')
romance_movie_4.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Romance/ffatc.jpg"), filename: 'FiveFeetApart.jpg')

romance_movie_5 = Movie.create({
  title: 'Last Christmas', 
  description: 'Kate is a young woman subscribed to bad decisions. Working as an elf in a year round Christmas store is not good for the wannabe singer. However, she meets Tom there. Her life takes a new turn. For Kate, it seems too good to be true.', 
  year: 2019, 
  length: '1h 43m', 
  rating: 'PG-13', 
  starring_actors: 'Madison Ingoldsby, Emma Thompson', 
  genre: 'Romance'
})

romance_movie_5.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Romance/lastchristmas.mp4"), filename: 'LastChristmas.mp4')
romance_movie_5.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Romance/lctc.jpg"), filename: 'LastChristmas.jpg')

romance_movie_6 = Movie.create({
  title: 'Always Be My Maybe', 
  description: 'Everyone assumed Sasha and Marcus would wind up together except for Sasha and Marcus. Reconnecting after 15 years, the two start to wonder - maybe?', 
  year: 2019, 
  length: '1h 41m', 
  rating: 'PG-13', 
  starring_actors: 'Ali Wong, Randall Park', 
  genre: 'Romance'
})

romance_movie_6.video.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Romance/abmm.mp4"), filename: 'AlwaysBeMyMaybe.mp4')
romance_movie_6.photo.attach(io: open("https://netflix-clone-pro.s3.us-east-2.amazonaws.com/Movies/Pictures/Romance/abmmtc.jpg"), filename: 'AlwaysBeMyMaybe.jpg')

# romance_movies = Movie.create([
#   {
#     title: 'Yesterday', 
#     description: 'A struggling musician realizes hes the only person on Earth who can remember The Beatles after waking up in an alternate timeline where they never existed.', 
#     year: 2019, 
#     length: '1h 56m', 
#     rating: 'PG-13', 
#     starring_actors: 'Himesh Patel, Lily James', 
#     genre: 'Romance'
#   },
#   {
#     title: 'After', 
#     description: 'A young woman falls for a guy with a dark secret and the two embark on a rocky relationship. Based on the novel by Anna Todd.', 
#     year: 2019, 
#     length: '1h 45m', 
#     rating: 'PG-13', 
#     starring_actors: 'Josephine Langford, Hero Fiennes Tiffin', 
#     genre: 'Romance'
#   },
#   {
#     title: 'Someone Great', 
#     description: 'After a devastating break up on the eve of her cross-country move, Jenny enjoys one last NYC adventure with her two best pals. Someone Great is a romantic comedy about love, loss, growth and the everlasting bond of female friendship.', 
#     year: 2019, 
#     length: '1h 32m', 
#     rating: 'R', 
#     starring_actors: 'Gina Rodriguez, LaKeith Stanfield', 
#     genre: 'Romance'
#   },
#   {
#     title: 'Five Feet Apart', 
#     description: 'A pair of teenagers with cystic fibrosis meet in a hospital and fall in love, though their disease means they must avoid close physical contact.', 
#     year: 2019, 
#     length: '1h 56m', 
#     rating: 'PG-13', 
#     starring_actors: 'Haley Lu Richardson, Cole Sprouse', 
#     genre: 'Romance'
#   },
#   {
#     title: 'Last Christmas', 
#     description: 'Kate is a young woman subscribed to bad decisions. Working as an elf in a year round Christmas store is not good for the wannabe singer. However, she meets Tom there. Her life takes a new turn. For Kate, it seems too good to be true.', 
#     year: 2019, 
#     length: '1h 43m', 
#     rating: 'PG-13', 
#     starring_actors: 'Madison Ingoldsby, Emma Thompson', 
#     genre: 'Romance'
#   },
#   {
#     title: 'Always Be My Maybe', 
#     description: 'Everyone assumed Sasha and Marcus would wind up together except for Sasha and Marcus. Reconnecting after 15 years, the two start to wonder - maybe?', 
#     year: 2019, 
#     length: '1h 41m', 
#     rating: 'PG-13', 
#     starring_actors: 'Ali Wong, Randall Park', 
#     genre: 'Romance'
#   }
# ])



# m = Movie.create[remove]({
#     title: 'test2', 
#     description: 'test2', 
#     year: 2019, 
#     length: '1h 56m', 
#     rating: 'PG-13', 
#     starring_actors: 'Himesh Patel, Lily James', 
#     genre: 'Romance'
#   })

# m.video.attach(io: open('https://netflix-clone-dev.s3.us-east-2.amazonaws.com/stock-footage-an-ancient-wooden-tablet-filled-with-carved-runic-signs-d-panning-from-top-left-to-bottom-right.webm'), filename: 'test.webm')


# m = Movie.create([
#   {
#     title: 'John Wick: Chapter 3 - Parabellum', 
#     description: 'John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.', 
#     year: 2019, 
#     length: '2h 11m', 
#     rating: 'R', 
#     starring_actors: 'Keanu Reeves, Halle Berry', 
#     genre: 'Action'
#   }

#   m.video.attach(io: open(""), filename: 'jwch3.mp4')