class Skill < ApplicationRecord
  has_many :grades 
  has_many :users, through: :grades

  def get_users_with_scores
    self.users.map do |user|
      score = user.grades.find_by(skill_id: self.id).score
      {user: user, score: score}
    end
  end
end
