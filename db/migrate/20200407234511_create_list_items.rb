class CreateListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :list_items do |t|
      t.integer :user_id, null: false
      t.integer :movie_id, null: false

      t.timestamps
    end

    add_index :list_items, :user_id
    add_index :list_items, :movie_id
  end
end
