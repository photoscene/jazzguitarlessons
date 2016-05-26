(function(){
    angular.module('appLessons', ['backand'])

    .controller('lessonCtrl', function($scope, Backand, lessonService, $filter){
        $scope.lessons = [];
        $scope.subCategories = [];
        $scope.switches = [];

        $scope.checkCategory = function(currentCategory,currentLesson){
            if($filter('filter')($scope.switches, {category : currentCategory.id + "", lesson : currentLesson.id + ""}).length)
                return true; 
            return false;
        };
        
        function getAllLessons() {
            lessonService.getLessons()
                .then(function (result) {
                $scope.lessons = result.data.data;
            });
        };
        function getAllSubCategories() {
            lessonService.getCategories()
                .then(function (result) {
                $scope.subCategories = result.data.data;
            });
        };
        function getAllSwitch() {
            lessonService.getSwitch()
                .then(function (result) {
                $scope.switches = result.data.data;
            });
        };


        getAllLessons();
        getAllSubCategories();
        getAllSwitch();
    })

    .controller('lessonDetailCtrl', ['$scope', '$routeParams', '$http', 'Backand', function($scope, $routeParams, $http, Backand) {
        $http.get(Backand.getApiUrl() + '/1/objects/lessons/' + $routeParams.id)
        .success(function(data) {
            $scope.lesson = data;
            $scope.code = $scope.lesson.youtubeVideoCode;
        });
        $scope.closeLeftBar = function (){
            var categoryList = $('.left-lessons');
            categoryList.hide();
        };

    }])

})();