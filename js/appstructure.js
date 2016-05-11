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
            controllerAs: 'header' // this is the alias from this one: ng-controlles="headerCtrl as header"
        };
    });

    var users = {
        loggedIn: false
    };

})();