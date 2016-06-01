(function(){
    angular.module('appStructure', [])

    .directive('footer', function () {
        return {
            restrict: 'E', //This menas that it will be used as an element.
            templateUrl: "views/templates/structure/footer.html"
        };
    })

    .directive('header', function () {
        return {
            restrict: 'E',
            scope: {user: '='},
            templateUrl: "views/templates/structure/header.html",
            controller: ['$scope', '$filter', function ($scope, $filter) {
                this.user = users;
            }],
            controllerAs: 'header' // this is the alias from this one: ng-controller="headerCtrl as header"
        };
    })

    .directive('lessonYoutube', function($sce) {
        return {
            restrict: 'EA',
            scope: { code:'=' },
            replace: true,
            template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
            link: function (scope) {
                scope.$watch('code', function (newVal) {
                   if (newVal) {
                       scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
                   }
                });
            }
        };
    });

    var users = {
        loggedIn: true
    };

})();