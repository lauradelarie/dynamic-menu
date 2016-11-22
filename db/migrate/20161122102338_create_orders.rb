class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :name
      t.text :choise
      t.decimal :total_price

      t.timestamps
    end
  end
end
