import watcherSlackAction from './slack-action.html';
import help from '../../messages/help';

const slackAction = function ($rootScope) {
  function actionDirective(scope, element, attrs) {
    scope.help = help;
    scope.action = {
      type: 'slack',
      status: {
        isHeaderOpen: false
      }
    };

    scope.removeAction = function () {
      $rootScope.$broadcast('action:removeAction', { name: attrs.name });
    };

  }

  return {
    restrict: 'E',
    template: watcherSlackAction,
    scope: true,
    link: actionDirective
  };
};

slackAction.$inject = ['$rootScope'];
export default slackAction;
