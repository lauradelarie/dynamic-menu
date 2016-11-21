class CreateSides < ActiveRecord::Migration[5.0]
  def change
    create_table :sides do |t|
      t.string :name
      t.decimal :price
      t.boolean :veg
      t.boolean :gluten

      t.timestamps
    end
  end
end
