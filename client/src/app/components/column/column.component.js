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

        this._Column = Column;
        this._Task = Task;
        this.$scope = $scope;
        this.$scope.model = this.model;

        this.listen();
      }

      destroy() {
        this._Column.$delete('api/columns/' + this.model.id).then(result => this.$scope.$emit('column:delete'));
      }

      add_task() {
        new this._Task({name: 'empty task name', column_id: this.model.id}).create().then(result => this.load());
      }

      load() {
        this._Column.get(this.model.id).then(column => {
          this.$scope.column = column;
          console.log('asdasdasdsdaasd', column);
        })
      }

      listen() {
        this.$scope.$on('task:delete', this.load.bind(this))
      }
    }
};
