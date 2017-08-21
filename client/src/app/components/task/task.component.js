export const taskComponent = {
  bindings: {
    model: '='
  },
  controllerAs: 'tsk',
  templateUrl: 'app/components/task/task.html',
  controller:
    class TaskController   {
      constructor($scope, Task) {
        'ngInject';

        this._Task = Task;
        this.$scope = $scope;
        this.$scope.isEditing = false;

        this._Task.get(this.model.id).then(task => {
          this.model = task;
          this.$scope.model = this.model;
        })
      }

      destroy() {
        this.model.delete().then(result => this.$scope.$emit('task:delete'))
      }

      edit() {
        this.$scope.isEditing = true
      }

      update() {
        this.model.name        = this.$scope.model.name;
        this.model.description = this.$scope.model.description;
        this.model.update().then(result => this.$scope.isEditing = false);
        this.$scope.model = this.model;
      }
    }
};
