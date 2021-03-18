class Skill < ApplicationRecord
  has_many :grades 
  has_many :users, through: :grades
end
