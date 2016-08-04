(function(){
    angular.module('jgl1')
    .service('lessonService', function ($http) {

        getLessons = function () {
            return $http.get('/js/json/lessons.json');
        };

        getCategorySections = function () {
            return $http.get('/js/json/subcategory_section.json');
        };

        getLesson = function (lessonId) {
            return $http.get('/js/json/lesson-' + lessonId + '.json');
        };

        return {
            getLessons: getLessons,
            getLesson: getLesson,
            getCategorySections: getCategorySections
        }
    })
    
})();