(function(){
    angular.module('appController', ['backand', 'services'])

    .controller('navCtrl', function($scope, Backand, categoryService){

        $scope.mainCategories = [];
        $scope.subCategories = [];
        $scope.selected = 0;

        $scope.select= function(index) {
           $scope.selected = index; 
        };

        categoryService.getMainCategories()
        .then(function(result) {
            $scope.mainCategories = result.data;
        });
        categoryService.getSubCategories()
        .then(function(result) {
            $scope.subCategories = result.data;
        });

    })

    .controller('mainCtrl', function(){
        this.user = users;
    });

    var users = {
        loggedIn: true
    };

})();