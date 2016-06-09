(function(){
    angular.module('activeNavs', [])

    .directive('activenav', function () {
        return {
            /*restrict: 'EA',
            link: function (scope, elem, attrs) {
                elem.click(function(e) {
                    e.preventDefault();
                    if (elem.hasClass('active')) {
                        elem.removeClass('active');
                    }
                    elem.addClass('active');
                });
            }*/
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