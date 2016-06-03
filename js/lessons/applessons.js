(function(){
    angular.module('appLessons', ['backand'])

    .controller('lessonCtrl', function($scope, lessonService){ //, Backand,
        $scope.lessons = [];

        lessonService.getLessons()
        .then(function(result) {
            $scope.lessons = result.data;
        });
    })

    .controller('lessonDetailCtrl', function($scope, lessonService, $routeParams) {
        $scope.lesson = [];
        lessonService.getLesson($routeParams.id)
        .then(function(result) {
            $scope.lesson = result.data;
            $scope.code = $scope.lesson.videoCode;
        });

        $scope.closeLeftBar = function (){
            var categoryList = $('.left-lessons'),
                lessonContainer = $('.detailed-lesson');
            categoryList.removeClass('in');
            lessonContainer.css({left: "-180px"});
            /*var left = categoryList.offset().left;

            categoryList.css({left:left})
            .animate({"left":"-300px"}, "slow", function(){
                categoryList.hide();
            });*/
        };
        $scope.openLeftBar = function (){
            var categoryList = $('.left-lessons'),
                lessonContainer = $('.detailed-lesson');
            categoryList.addClass('in');
            lessonContainer.css({left: "0px"});
            /*var left = categoryList.offset().left;

            categoryList
            .show( function(){
                categoryList.animate({"left":"0px"}, "slow");
            });*/
        };

        /*$scope.leftBar = {
            init: function() {
                this.$element = $('.left-lessons');
                this.$leftPosition = this.$element.offset().left;
            },
            openBar: function () {
                this.$element
                .show( function(){
                    categoryList.animate({"left":"0px"}, "slow");
                });
            },
            closeBar: function() {
                this.$element
                .css({left:left})
                .animate({"left":"-300px"}, "slow", function(){
                    categoryList.hide();
                });
            }
        }*/

    })

})();