export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('boards', {
      url: '/boards',
      templateUrl: 'app/components/boards/boards.html',
      controller: 'BoardsController',
      controllerAs: 'boards'
    })
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
