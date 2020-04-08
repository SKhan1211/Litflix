json.array! @movies do |movie|
  json.extract! movie, :id, :title, :description, :year, :length, :rating, :starring_actors, :genre
  json.videoURL url_for(movie.video)
  json.photoURL url_for(movie.photo)
end
