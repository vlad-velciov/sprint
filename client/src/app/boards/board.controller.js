export class BoardController {
  constructor($scope, Board, Column, $stateParams, toastr) {
    'ngInject';

    this._Column = Column;
    this._Board = Board;

    this.id = $stateParams.board_id;
    this.$scope = $scope;
    this._toastr = toastr;

    this.load();
    this.listen();
  }

  create_column() {
    if (this.$scope.board.columns.length >= 6) {
      this._toastr.warning('Maximum number of columns has been reached');
      return;
    }
    new this._Column({name: this.$scope.column_name, board_id: this.id}).create().then(result => this.load())
  }

  load() {
    this._Board.get(this.id).then(board => this.$scope.board = board)
  }

  listen() {
    this.$scope.$on('column:delete', this.load.bind(this))
  }
}
