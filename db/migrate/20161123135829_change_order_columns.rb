class ChangeOrderColumns < ActiveRecord::Migration[5.0]
  def change
    add_reference :orders, :table, foreign_key: true
    add_column :orders, :kitchen, :boolean, default: false
  end
end
