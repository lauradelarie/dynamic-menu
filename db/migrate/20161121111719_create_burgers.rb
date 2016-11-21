class CreateBurgers < ActiveRecord::Migration[5.0]
  def change
    create_table :burgers do |t|
      t.string :meat
      t.integer :grams
      t.decimal :price
      t.boolean :veg
      t.boolean :gluten

      t.timestamps
    end
  end
end
