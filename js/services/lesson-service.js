(function(){
    angular.module('jgl1')
    .service('lessonService', function ($http, Backand) {
        var baseUrl = '/1/objects/';
        var objectName = 'lessons';

        function getUrlLessons () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        getLessons = function () {
            return $http.get(getUrlLessons());
        };

        /*getLessons = function () {
            return $http.get('/js/json/lessons.json');
        };*/

        /*getLesson = function (lessonId) {
            return $http.get('/js/json/lesson-' + lessonId + '.json');
        };*/

        return {
            getLessons: getLessons
            //getLesson: getLesson
        }
    })
    .service('lessonSectionService', function ($http, Backand) {
        var baseUrl = '/1/objects/';
        var objectName = 'lessonSections';

        /*Maincategories*/
        function getUrlLessonSections () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        getLessonSections = function () {
            return $http.get(getUrlLessonSections());
        };

        return {
            getLessonSections: getLessonSections
        };
    })
    
})();