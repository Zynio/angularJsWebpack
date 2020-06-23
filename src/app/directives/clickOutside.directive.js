import angular from 'angular'

/* @ngInject */
function clickOutside($document) {
    return {
        restrict: 'A',
        scope: {
            opened: '=',
            clickOutside: '&'
        },
        link: function (scope, el, attr) {

            const onClick = (e) => {
                if (el !== e.target && !el[0].contains(e.target) && scope.opened) {
                    scope.$apply(function () {
                        scope.$eval(scope.clickOutside);
                    });
                }
            };

            scope.$watch('opened', (newValue) => {
                if (newValue) {
                    setTimeout(() =>  $document.on('click', onClick), 1000)
                } else {
                    $document.off('click', onClick);
                }
            });
        }
    }
}

export default angular.module('directives.clickOutside', [])
    .directive('clickOutside', clickOutside)
    .name