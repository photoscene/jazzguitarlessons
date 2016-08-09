(function(){
    angular.module('jgl1')
    .service('lessonService', function ($http, Backand, $routeParams) {
        var baseUrl = '/1/objects/';
        var objectName = 'lessons';

        function getUrlLessons () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        getLessons = function () {
            return $http.get(getUrlLessons());
        };

        getLesson = function (lessonId) {
            return Backand.getApiUrl() + '/1/objects/lessons/' + 'lessonId';
        };

        return {
            getLessons: getLessons,
            getLesson: getLesson
        }
    })
    .service('lessonSectionService', function ($http, Backand) {
        var baseUrl = '/1/objects/';
        var objectName = 'lessonSections';

        /* Lesson Sections */
        
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