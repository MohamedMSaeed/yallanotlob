class CreateGroupMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :group_members do |t|
      t.references :friendship, foreign_key: true
      t.references :group, foreign_key: true

      t.timestamps
    end
  end
end
