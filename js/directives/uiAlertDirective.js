angular.module('listaTelefonica').directive('uiAlert', () => {
  return {
    templateUrl: 'view/alert.html',
    replace: true,
    restrict: 'E',
    scope: {
      title: '@title',
      message: '=message'
    },
    transclude: true
  }
})
