(function(){
    angular.module('appController', ['backand', 'categoryServices'])

    .controller('navCtrl', function($scope, categoryService, navService, $routeParams){

        $scope.mainCategories = [];
        $scope.subCategories = [];

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

        /*categoryService.getMainCategories()
        .then(function(result) {
            $scope.mainCategories = result.data;
        });*/
        /*categoryService.getSubCategories($routeParams.parent)
        .then(function(result) {
            $scope.subCategories = result.data;
        });*/

    });

})();