class BoardDecorator < Draper::Decorator

  def as_json(options=nil)
    {
      name: object.name,
      columns: ColumnDecorator.decorate_collection(object.columns).as_json
    }
  end
end
