(function(){
    angular.module('appLessons', ['backand'])

    .controller('lessonCtrl', function($scope, Backand, lessonService){
        $scope.lessons = [];

        function getAllLessons() {
            lessonService.getLessons()
                .then(function (result) {
                $scope.lessons = result.data.data;
            });
        };
        getAllLessons();


        /*function getCurrentLessons() {
            lessonService.getCurrentLesson()
                .then(function (result) {
                $scope.lesson = result.data.data;
            });
        };
        getCurrentLessons();*/
    })

    .controller('lessonDetailCtrl', ['$scope', '$routeParams', '$http', 'Backand', function($scope, $routeParams, $http, Backand) {
        $http.get(Backand.getApiUrl() + '/1/objects/lessons/' + $routeParams.id)
        .success(function(data) {
            $scope.lesson = data;

            $scope.code = $scope.lesson.youtubeVideoCode;
        });
    }])
})();