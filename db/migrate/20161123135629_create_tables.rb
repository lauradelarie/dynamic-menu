class CreateTables < ActiveRecord::Migration[5.0]
  def change
    create_table :tables do |t|
      t.string :tablenumber
      t.boolean :taken, default: false

      t.timestamps
    end
  end
end
