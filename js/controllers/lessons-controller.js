(function(){
    angular.module('controllers', ['backand'])

    .controller('lessonCtrl', function($scope, lessonService, lessonSectionService, $routeParams){
        $scope.lessons = [];
        
        $scope.categorySections = [];
        $scope.selected = 0;

        function getAllLessons() {
            lessonService.getLessons()
            .then(function(result) {
                $scope.lessons = result.data.data;
            }); 
        }

        function getAllLessonSections() {
            lessonSectionService.getLessonSections()
            .then(function(result) {
                $scope.categorySections = result.data.data;
            }); 
        }

        getAllLessonSections();
        getAllLessons();

        $scope.select= function(index) {
           $scope.selected = index; 
        };
    })

    .controller('lessonDetailCtrl', function($scope, $routeParams, lessonDetailService) {
        $scope.lesson = [];

        function getCurrentLesson() {
            lessonDetailService
                .getLesson($routeParams.id)
                .then(function(result) {
                    $scope.lesson = result.data;
                    $scope.code = $scope.lesson.youtubeVideoCode;
                });
        }
        
        getCurrentLesson();
        
        console.log($routeParams.id);

    })

})();