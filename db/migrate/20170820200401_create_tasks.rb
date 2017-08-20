class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.belongs_to :column, null: false
      t.timestamps
    end
  end
end
