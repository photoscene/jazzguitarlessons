(function(){
    angular.module('appController', ['backand', 'categoryServices'])

    .controller('navCtrl', function($scope, categoryService, $routeParams){

        $scope.mainCategories = [];
        $scope.subCategories = [];

        categoryService.getMainCategories()
        .then(function(result) {
            $scope.mainCategories = result.data;
        });
        categoryService.getSubCategories($routeParams.parent)
        .then(function(result) {
            $scope.subCategories = result.data;
        });

    });

})();