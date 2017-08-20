export const columnComponent = {
  bindings: {
    model: '='
  },
  controllerAs: 'cl',
  templateUrl: 'app/components/column/column.html',
  controller:
    class ColumnController   {
      constructor($scope, Column) {
        'ngInject';

        this._Column = Column;
        this.$scope = $scope;
      }

      destroy() {
        this._Column.$delete('api/columns/' + this.model.id).then(result => this.$scope.$emit('column:delete'))
      }
    }
};
