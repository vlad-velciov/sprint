export const taskComponent = {
  bindings: {
    model: '='
  },
  controllerAs: 'cl',
  templateUrl: 'app/components/task/task.html',
  controller:
    class TaskController   {
      constructor($scope, Task) {
        'ngInject';

        this._Task = Task;
        this.$scope = $scope;
      }

      destroy() {
        this._Task.$delete('api/tasks/' + this.model.id).then(result => this.$scope.$emit('task:delete'))
      }
    }
};
