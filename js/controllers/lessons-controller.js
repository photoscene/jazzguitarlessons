(function(){
    angular.module('appLessons', ['backand'])

    .controller('lessonCtrl', function($scope, lessonService, lessonSectionService, $routeParams){
        $scope.lessons = [];
        $scope.lesson = [];
        $scope.categorySections = [];
        $scope.selected = 0;

        function getAllLessons() {
            lessonService.getLessons()
            .then(function(result) {
                $scope.lessons = result.data.data;
            }); 
        }

        /*function getCurrentLessons() {
            lessonService.getLesson($routeParams.id)
            .then(function(result) {
                $scope.lesson = result.data.data;
                $scope.code = $scope.lesson.videoCode;
                $scope.soundCloudCode = $scope.lesson.trackCode;
            }); 
        }*/

        function getAllLessonSections() {
            lessonSectionService.getLessonSections()
            .then(function(result) {
                $scope.categorySections = result.data.data;
            }); 
        }

        getAllLessonSections();
        getAllLessons();
        //getCurrentLessons();

        $scope.select= function(index) {
           $scope.selected = index; 
        };
    });

})();