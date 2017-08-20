class TaskDecorator < Draper::Decorator
  def as_json(options=nil)
    {
      id: object.id,
      name: object.name
    }
  end
end
