class Api::SearchesController < ApplicationController
  def index
    @movies = Movie.where('title LIKE ?', "%" + params[:search_query] + "%").all
    render :index
  end
end
