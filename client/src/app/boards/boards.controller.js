export class BoardsController {
  constructor($scope, Board) {
    'ngInject';

    this._Board = Board;
    this._$scope = $scope;

    this.load();
  }

  add(name) {
    new this._Board({name: name}).create().then(result => this.load());
    this.load();
  }

  destroy(board) {
    board.delete().then(result => this.load());
  }

  load() {
    this._Board.query().then(boards => this._$scope.boards = boards);
  }
}
