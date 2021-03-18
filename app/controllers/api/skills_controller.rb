class Api::SkillsController < ApplicationController

  before_action :set_skill, only: [:show, :destroy]

  def index
    skills = Skill.all
    render json: skills
  end

  def show
    users = @skill.get_users_with_scores
    render json: {skill: @skill, users: users}
  end

  def create
    skill = Skill.new(skill_params)
    if(user.save)
      render json: skill
    else
      render json: {error: @skill.errors}, status: 422
    end
  end

  def destroy
    @skill.destroy
    render json: @skill
  end

  private

  def skill_params
    params.require(:skill).permit(:name, :description)
  end

  def set_skill
    @skill = Skill.find(params[:id])
  end
end
