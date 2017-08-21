class AddDescriptionToColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :description, :string, default: nil
  end
end
