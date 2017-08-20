export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('board', {
      url: '/boards/:board_id',
      templateUrl: 'app/boards/board.html',
      controller: 'BoardController',
      controllerAs: 'bd'
    })
    .state('boards', {
      url: '/boards',
      templateUrl: 'app/boards/boards.html',
      controller: 'BoardsController',
      controllerAs: 'bds'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
