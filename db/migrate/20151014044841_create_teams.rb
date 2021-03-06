##
# Team model
#
class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.references :user
      t.integer :user_team_id # Identify a member of this team

      t.timestamps null: false
    end

    add_index :teams, :user_id
    add_index :teams, :user_team_id
  end
end
