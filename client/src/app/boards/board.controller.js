export class BoardController {
  constructor($scope, Board, Column, $stateParams) {
    'ngInject';

    this._Column = Column;
    this._Board = Board;

    this.id = $stateParams.board_id;
    this.$scope = $scope;

    this.load();
    this.listen();
  }

  create_column() {
    new this._Column({name: this.$scope.column_name, board_id: this.id}).create().then(result => this.load())
  }

  load() {
    this._Board.get(this.id).then(board => this.$scope.board = board)
  }

  listen() {
    this.$scope.$on('column:delete', this.load.bind(this))
  }
}
