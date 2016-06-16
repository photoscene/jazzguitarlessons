(function(){
    angular.module('appLessons', ['backand'])

    .controller('lessonCtrl', function($scope, lessonService, $routeParams){ //, Backand,
        $scope.lessons = [];
        $scope.lesson = [];
        $scope.categorySections = [];
        $scope.selected = 0;

        lessonService.getLessons()
        .then(function(result) {
            $scope.lessons = result.data;
        });

        lessonService.getLesson($routeParams.id)
        .then(function(result) {
            $scope.lesson = result.data;
            $scope.code = $scope.lesson.videoCode;
            $scope.soundCloudCode = $scope.lesson.trackCode;
        });

        lessonService.getCategorySections()
        .then(function(result) {
            $scope.categorySections = result.data;
        });

        $scope.select= function(index) {
           $scope.selected = index; 
        };
        /*$scope.closeLeftBar = function (){
            var categoryList = $('.left-lessons'),
                lessonContainer = $('.detailed-lesson');
            categoryList.removeClass('in');
            setTimeout(function(){
                lessonContainer.css({left: "-180px"});
            }, 200);
        };
        $scope.openLeftBar = function (){
            var categoryList = $('.left-lessons'),
                lessonContainer = $('.detailed-lesson');
            categoryList.addClass('in');
            lessonContainer.css({left: "0px"});
        };*/
    });

})();