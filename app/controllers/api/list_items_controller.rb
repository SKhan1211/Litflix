class Api::ListItemsController < ApplicationController
  def index # Use this for getting users list on sign in, or show?
    @listitems = ListItem.all
    render :index
  end

  def show
    @listitem = ListItem.find(params[:id])

    if @listitem 
      render :show
    else 
      render json: @listitem.errors.full_messages, status: 422
    end
  end
  
  def create
    @listitem = ListItem.new(listitem_params)

    if @listitem.save
      render :show
    else 
      render json: @listitem.errors.full_messages, status: 422
    end
  end

  def destroy
    @listitem = ListItem.find(params[:id])

    if @listitem.delete
      render :show
    else
      render json: @listitem.errors.full_messages, status: 422
    end
  end

  private
  def listitem_params
    params.require(:list_item).permit(:user_id, :movie_id)
  end
end
