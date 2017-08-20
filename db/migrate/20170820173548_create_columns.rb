class CreateColumns < ActiveRecord::Migration[5.1]
  def change
    create_table :columns do |t|
      t.string :name, null: false
      t.belongs_to :board, null: false
      t.timestamps
    end
  end
end
