class Movie < ApplicationRecord
  validates :title, :description, :year, :length, :rating, :starring_actors, :genre, presence: true

  has_one_attached :video

end