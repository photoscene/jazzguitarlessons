(function(){
    angular.module('appController', ['backand']) /*, 'lessonService'*/

    .controller('navCtrl', function($scope, Backand, navService){

        $scope.mainCategories = [];

        this.selectNav = function (setNav){
            this.nav = setNav;
        };
        this.isSelected = function (checkNav){
            return this.nav === checkNav;
        };

        function getAllMainCategories() {
            navService.getMainCategories()
                .then(function (result) {
                $scope.mainCategories = result.data.data;
            });
        };

        getAllMainCategories();
    })

    .controller('mainCtrl', function(){
        this.user = users;
    });

    var users = {
        loggedIn: true
    };

})();