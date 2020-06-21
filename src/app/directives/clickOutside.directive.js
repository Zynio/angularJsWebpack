import angular from 'angular'

/* @ngInject */
function clickOutside($document) {
    return {
        restrict: 'A',
        scope: {
            clickOutside: '&'
        },
        link: function (scope, el, attr) {

            $document.on('click', function (e) {
                if (el !== e.target && !el[0].contains(e.target)) {
                    scope.$apply(function () {
                        scope.$eval(scope.clickOutside);
                    });
                }
            });
        }
    }
}

export default angular.module('directives.clickOutside', [])
    .directive('clickOutside', clickOutside)
    .name