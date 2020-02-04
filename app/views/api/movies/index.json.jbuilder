json.array! @movies do |movie|
  json.extract! movie, :id, :title
  json.videoURL url_for(movie.video)
end