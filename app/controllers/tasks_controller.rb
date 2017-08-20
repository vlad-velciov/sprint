class TasksController < ApplicationController
  def create
    Task.create(task_params[:tasks])
  end

  def destroy
    Task.destroy(params[:id])
  end

  private

  def task_params
    params.permit(tasks: [:name, :column_id])
  end
end
