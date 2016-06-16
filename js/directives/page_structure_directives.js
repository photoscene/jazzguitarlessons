(function(){
    angular.module('pageStructure', [])

    .directive('footer', function () {
        return {
            restrict: 'E', //This menas that it will be used as an element.
            templateUrl: "views/templates/page_structure/footer.html"
        };
    })

    .directive('header', function () {
        return {
            restrict: 'E',
            
            templateUrl: "views/templates/page_structure/header.html",
            controller: ['$scope', '$filter', function ($scope, $filter) {
                this.user = users;
            }],
            controllerAs: 'header' // this is the alias from this one: ng-controller="headerCtrl as header"
        };
    });

    var users = {
        loggedIn: true
    };

})();