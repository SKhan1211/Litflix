class Api::SearchesController < ApplicationController
  def index
    @movies = Movie.where('title LIKE ?', "%" + params[:search_term] + "%").all
    render :index
  end
end
