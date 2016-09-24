(function(){
    angular.module('services')
    .service('lessonService', function ($http, Backand, $routeParams) {
        var baseUrl = '/1/objects/';
        var objectName = 'lessons';

        function getUrlLessons () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        getLessons = function () {
            return $http.get(getUrlLessons());
        };


        return {
            getLessons: getLessons
            //getLesson: getLesson
        }
    })
    .service('lessonDetailService', function ($http, Backand) {
        var getLesson = function (id) {
            return $http.get(Backand.getApiUrl() + '/1/objects/lessons/' + id);
        };
        return {
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