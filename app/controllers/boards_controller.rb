class BoardsController < ApplicationController

  def index
    render json: Board.all
  end

  def show
    render json: Board.includes(:columns).find(params[:id]).decorate
  end

  def destroy
    Board.destroy(params[:id])
  end

  def create
    Board.create board_params[:boards]
  end

  private

  def board_params
    params.permit(boards: :name)
  end
end
