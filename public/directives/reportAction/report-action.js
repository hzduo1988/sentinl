import watcherReportAction from './report-action.html';
import help from '../../messages/help';

const reportAction = function ($rootScope) {
  function actionDirective(scope, element, attrs) {
    scope.help = help;
    scope.action = {
      type: 'report',
      resolutionPattern: '^\\d{1,4}x\\d{1,4}$',
      status: {
        isHeaderOpen: false
      }
    };

    scope.removeAction = function () {
      $rootScope.$broadcast('action:removeAction', { name: attrs.name });
    };

    scope.applyReportType = function (name) {
      scope.watcher._source.actions[attrs.name].report.snapshot.type = name;
    };

  }

  return {
    restrict: 'E',
    template: watcherReportAction,
    scope: true,
    link: actionDirective
  };
};

reportAction.$inject = ['$rootScope'];
export default reportAction;
