/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { BoardsController } from '../app/boards/boards.controller';
import { BoardController } from '../app/boards/board.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { columnComponent } from '../app/components/column/column.component';
import { taskComponent } from '../app/components/task/task.component';
angular.module('sprint', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  'ui.router',
  'ui.bootstrap',
  'toastr',
  'rails'
  ]).constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('BoardsController', BoardsController)
  .controller('BoardController', BoardController)
  .component('columnComponent',  columnComponent)
  .component('taskComponent',  taskComponent)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .factory('Board', railsResourceFactory => {
    return railsResourceFactory({
      url: '/api/boards',
      name: 'boards',
    });
  })
  .factory('Column', railsResourceFactory => {
    return railsResourceFactory({
      url: '/api/columns',
      name: 'columns'
    });
  })
  .factory('Task', railsResourceFactory => {
    return railsResourceFactory({
      url: '/api/tasks',
      name: 'tasks'
    });
  })
;
