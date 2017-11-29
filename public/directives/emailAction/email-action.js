import watcherEmailAction from './email-action.html';
import help from '../../messages/help';

const emailAction = function ($rootScope) {
  function actionDirective(scope, element, attrs) {
    scope.help = help;
    scope.action = {
      type: 'email',
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
    template: watcherEmailAction,
    scope: true,
    link: actionDirective
  };
};

emailAction.$inject = ['$rootScope'];
export default emailAction;
