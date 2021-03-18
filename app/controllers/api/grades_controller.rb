class Api::GradesController < ApplicationController
  before_action :set_grade, only: [:show, :destroy]

  def index
    grades = Grade.all
    render json :grades
  end

  def show
    render json: @grade
  end

  def create
    grade = Grade.new(grade_params)
    if(grade.save)
      render json: grade
    else
      render json: {error: @grade.errors}, status: 422
    end
  end

  def destroy
    @grade.destroy
    render json: @grade
  end

  private

  def grade_params
    params.require(:grade).permit(:score, :user_id, :skill_id)
  end

  def set_grade
    @grade = Grade.find(params[:id])
  end
end
