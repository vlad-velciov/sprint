export const columnComponent = {
  bindings: {
    model: '='
  },
  controllerAs: 'cl',
  templateUrl: 'app/components/column/column.html',
  controller:
    class ColumnController   {
      constructor($scope, Column, Task) {
        'ngInject';

        this._Column      = Column;
        this._Task        = Task;
        this.$scope       = $scope;
        this.$scope.model = this.model;
        this._Column.get(this.model.id).then(column => this.model = column);

        this.$scope.isEditing = false;

        this.listen();
      }

      destroy() {
        this.model.delete().then(result => this.$scope.$emit('column:delete'))
      }

      add_task() {
        new this._Task(
          {
            name: 'empty task name',
            column_id: this.model.id,
            description: 'Some description'
          })
          .create()
          .then(result => this.load());
      }

      load() {
        this.model.get().then(column => this.$scope.model = column)
      }

      listen() {
        this.$scope.$on('task:delete', this.load.bind(this))
      }

      edit() {
        this.$scope.isEditing = true;
      }

      update() {
        this.model.name = this.$scope.model.name;
        this.model.update().then(result => this.$scope.isEditing = false);
        this.$scope.model = this.model;
      }
    }
};
