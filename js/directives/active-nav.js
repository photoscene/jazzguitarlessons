(function(){
    angular.module('activeNavs', [])

    .directive('activenav', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                active: '='
            },
            template: '<li ng-click="active = $id" ng-class="{active: $id === active}" ng-transclude></li>'
        };
    });

})();