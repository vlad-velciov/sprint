class ColumnDecorator < Draper::Decorator
  def as_json(options=nil)
    {
      id: object.id,
      name: object.name,
      tasks: TaskDecorator.decorate_collection(object.tasks)
    }
  end
end
