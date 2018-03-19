class ChangeUsers < ActiveRecord::Migration[5.1]
  def up
  	change_column :users, :image , :string , :default => 'amale-avatar-icon-614x460.png'
  end
end
