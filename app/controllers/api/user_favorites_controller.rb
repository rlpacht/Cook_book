class Api::UserFavoritesController < ApplicationController
  def create
    recipe_id = params[:user_favorite][:recipe_id]
    user_id = current_user.id
    user_favorite = UserFavorite.create({recipe_id: recipe_id, user_id: user_id})
    render json: {user_favorite: user_favorite}
  end

  def destroy
    UserFavorite.delete(params[:id])
    render json: {}
  end

  def index
    user_favorites = UserFavorite.where({user_id: current_user.id})
    recipes = user_favorites.map do |user_favorite|
      user_favorite.recipe.json_with_note_ids
    end
    render json: {user_favorites: user_favorites, recipes: recipes}
  end
end