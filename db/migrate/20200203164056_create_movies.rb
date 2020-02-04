class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :year, null: false
      t.string :length, null: false
      t.string :rating, null: false
      t.string :starring_actors, null: false
      t.string :genre, null: false

      t.timestamps
    end

    add_index :movies, :title
    add_index :movies, :genre
  end
end
