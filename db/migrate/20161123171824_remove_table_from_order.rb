class RemoveTableFromOrder < ActiveRecord::Migration[5.0]
  def change
    remove_column :orders, :table, :string
  end
end
