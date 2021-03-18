# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Skill.create(name: 'ruby', description:'Syntaz Sugar')
Skill.create(name: 'rails', description:'Stay on the rails...Convention')
Skill.create(name: 'react', description:'make writing UI noooice!!!')

# Skills could also be a homework with a grade
Skill.create(name: 'Homework1', description:'CRUD ACTIONS!!')
Skill.create(name: 'Homework2', description:'Cassino')

5.times do
    user = User.create(name: Faker::Name.name)
      
    # each user will have a grade for each skill
    5.times do |i|
    Grade.create(user_id: user.id, skill_id: i, score: rand(100))
  end
end

puts "SKILLZZ SIZE: #{Skill.all.length}"
puts "USER SIZE: #{User.all.length}"
puts "GRADE SIZE: #{Grade.all.length}"

# grab users skill
puts "FIRST USER SKILLs: #{User.first.skills}"

# grab users firts skill grades
puts "FIRST USER Grades: #{User.first.grades}"