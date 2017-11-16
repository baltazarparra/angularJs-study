angular.module('listaTelefonica').directive('uiAccordions', () => {
  return {
    controller: function ($scope, $element, $attrs) {
      const accordions = []

      this.registerAccordion = function(accordion) {
        accordions.push(accordion)
      }

      this.closeAll = function() {
        accordions.forEach(function(accordion) {
          accordion.isOpened = false
        })
      }

    }
  }
})

angular.module('listaTelefonica').directive('uiAccordion', () => {
  return {
    templateUrl: 'view/accordion.html',
    transclude: true,
    scope: {
      title: '@'
    },
    require: '^uiAccordions',
    link: (scope, element, attrs, ctrl) => {
      ctrl.registerAccordion(scope)
      scope.open = () => {
        ctrl.closeAll()
        scope.isOpened = true
      }
    }
  }
})
