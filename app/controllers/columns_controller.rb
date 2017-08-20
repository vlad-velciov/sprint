class ColumnsController < ApplicationController
  def index
    render json: Column.all
  end

  def create
    Column.create column_params[:columns]
  end

  def destroy
    Column.destroy(params[:id])
  end

  private

  def column_params
    params.permit(columns: [:name, :board_id])
  end
end
