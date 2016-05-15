(function(){
    angular.module('appStructure', ['backand']) /*, 'lessonService'*/

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

    .controller('navCtrl', function(){
        this.selectNav = function (setNav){
            this.nav = setNav;
        };
        this.isSelected = function (checkNav){
            return this.nav === checkNav;
        };
    })

    .controller('mainCtrl', function($scope, Backand, lessonService){
        this.user = users;
        $scope.lessons = [];

        function getAllLessons() {
            lessonService.getLessons()
                .then(function (result) {
                $scope.lessons = result.data.data;
                console.log(result);
            });
        };
        getAllLessons();
    });

    

    var users = {
        loggedIn: true
    };

})();