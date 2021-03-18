class User < ApplicationRecord
  has_many :grades
  has_many :skills, through: :grades

  #instance method so ti will be called on the instance of the class
  def get_skills_with_scores
    self.skills.map do |skill|
      score = skill.grades.find_by(user_id: self.id).score
      {skill:skill, score:score}
    end
  end
end
