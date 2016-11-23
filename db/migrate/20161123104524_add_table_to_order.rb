class AddTableToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :table, :string
  end
end
