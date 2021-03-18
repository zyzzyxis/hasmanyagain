class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy]

  def index
    users = User.all
    render json: users
  end

  def show
    render json: {user:@user, skills:@user.get_skills_with_scores}
  end

  def create
    user = User.new(user_params)
    if(user.save)
      render json: user
    else
      render json: {error: @user.errors}, status: 422
    end
  end

  def destroy
    @user.destroy
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

  def set_user
    @user = User.find(params[:id])
  end

end
