(function(){
    angular.module('guitarlessons')
    .service('lessonService', function ($http, Backand) {

        var baseUrl = '/1/objects/';
        var objectName = 'lessons/';

        function getUrl () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        /*function getLessonUrl () {
            return Backand.getApiUrl() + baseUrl + objectName + $routeParams.lessonId;
        };*/

        getLessons = function () {
            return $http.get(getUrl());
        };

        /*getCurrentLesson = function () {
            return $http.get(getLessonUrl());
        };*/

        return {
            getLessons: getLessons
            /*getCurrentLesson: getCurrentLesson*/
        };
    })
    
})();