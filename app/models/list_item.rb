class ListItem < ApplicationRecord
  validates :user_id, :movie_id, presence: true

end
