export class BoardsController {
  constructor($scope, Board) {
    'ngInject';

    Board.query().then(boards => $scope.boards = boards);
  }
}
