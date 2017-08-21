class TasksController < ApplicationController
  def create
    Task.create(task_params[:tasks])
  end

  def destroy
    Task.destroy(params[:id])
  end

  def show
    render json: Task.find(params[:id]).decorate
  end

  def update
    task = Task.find(params[:id])
    task.update(name: params[:tasks][:name])
  end

  private

  def task_params
    params.permit(tasks: [:name, :column_id, :description])
  end

  def update_params
    params.permit(tasks: [:name, :description])
  end
end
