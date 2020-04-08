class ListItemsController < ApplicationController
  def index # Use this for getting users list on sign in, or show?
    @listitems = ListItem.all
    render :index
  end
  
  def create
    @listitem = ListItem.new(listitem_params)

    if @listitem.save
      render "api/listitems/index"
    else 
      render json: @listitem.errors.full_messages, status: 422
    end
  end

  def destroy
    @listitem = ListItem.find(params[:id])

    if @listitem.delete
      render "api/listitems/index"
    else
      render json: @listitem.errors.full_messages, status: 422
    end
  end

  private
  def listitem_params
    params.require(:user).permit(:user_id, :movie_id)
  end
end
