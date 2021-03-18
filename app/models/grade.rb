class Grade < ApplicationRecord
  belongs_to :user
  belongs_to :skill

  def self.all_and_then_some
    grades = Grade.all
    grades.map do |grade|
      { id: grade.id, score: grade.score, user: grade.user, skill: grade.skill }
    end

  end
end
