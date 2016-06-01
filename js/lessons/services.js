(function(){
    angular.module('services', ['backand'])
    /*.service('lessonService', function ($http, Backand) {

        var baseUrl = '/1/objects/';
        var objectName = 'lessons/';

        function getUrl () {
            return Backand.getApiUrl() + baseUrl + objectName;
        }

        getLesson = function () {
            return $http.get(getUrl());
        };

        return {
            getLesson: getLesson
        }
    })*/
    .service('categoryService', function ($http) {
        
        getMainCategories = function () {
            return $http.get('/js/json/main_categories.json');
        };
        getSubCategories = function () {
            return $http.get('/js/json/subcategories.json');
        };
        
        return {
            getMainCategories: getMainCategories,
            getSubCategories: getSubCategories
        }

    });
})();
