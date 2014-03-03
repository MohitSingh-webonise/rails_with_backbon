class UsersController < ApplicationController
  def index
  end

  def create
    logger.info "++++++++++++inside the user controller++++++++++++++++"
    logger.info params.inspect

    @user = User.new(params[:user])
    if @user.save
     respond_to do |format|
      format.html
      format.json { render js: @user.to_json }
    end
    end
  end


end
