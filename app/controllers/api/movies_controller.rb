class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render :index
  end

  def show
    @movie = Movie.find(params[:id])
    render :show
  end

  private
  def movie_params
    params.require(:movie).permit(:id)
  end
end 