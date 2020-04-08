json.array! @listitems do |listitem|
  json.extract! listitem, :id, :user_id, :movie_id
end