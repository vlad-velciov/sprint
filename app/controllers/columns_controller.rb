class ColumnsController < ApplicationController
  def index
    render json: Column.all
  end

  def create
    Column.create column_params[:columns]
  end

  def show
    render json: ColumnDecorator.decorate(Column.find(params[:id]))
  end

  def update
    column = Column.find(params[:id])
    column.update(name: params[:columns][:name])
  end

  def destroy
    Column.destroy(params[:id])
  end

  private

  def column_params
    params.permit(columns: [:name, :board_id])
  end
end
