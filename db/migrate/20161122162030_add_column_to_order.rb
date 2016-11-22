class AddColumnToOrder < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :served, :boolean, default: false
  end
end
