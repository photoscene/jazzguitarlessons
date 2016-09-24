(function(){
    angular.module('appController', ['backand', 'services', 'app.factory'])

    .controller('navCtrl', function(loginFactory, $scope, categoryService, navService, $routeParams){

        $scope.mainCategories = [];
        $scope.subCategories = [];
        $scope.loggedInUser = {
            status: loginFactory.getFacebookStatus()
        };
        
        function getAllMainCategories() {
            navService.getMainCategories()
                .then(function (result) {
                $scope.mainCategories = result.data.data;
            });
        };

        getAllMainCategories();

        function getAllSubCategories() {
            categoryService.getCategories()
                .then(function (result) {
                $scope.subCategories = result.data.data;
            });
        };

        getAllSubCategories();

    });

})();