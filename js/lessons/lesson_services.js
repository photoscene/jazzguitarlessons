(function(){
    angular.module('models')
    .service('lessonService', function ($http, Backand) {

        var baseUrl = '/1/objects/';
        var objectName = ['lessons/', 'subCategories', 'lessons_categories_switch'];

        function getUrlAllLessons () {
            return Backand.getApiUrl() + baseUrl + objectName[0];
        };
        /*All Lessons*/
        getLessons = function () {
            return $http.get(getUrlAllLessons());
        };


        /*Subcategories*/
        function getUrlSubcategories () {
            return Backand.getApiUrl() + baseUrl + objectName[1];
        };

        getCategories = function () {
            return $http.get(getUrlSubcategories());
        };

        /*Category Lesson Swith*/
        function getUrlSwitch () {
            return Backand.getApiUrl() + baseUrl + objectName[2];
        };

        getSwitch = function () {
            return $http.get(getUrlSwitch());
        };

        return {
            getLessons: getLessons,
            getCategories: getCategories,
            getSwitch: getSwitch
        };
    })

    .service('navService', function ($http, Backand) {
        var baseUrl = '/1/objects/';
        var objectName = 'mainCategories';

        /*Maincategories*/
        function getUrlMaincategories () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        getMainCategories = function () {
            return $http.get(getUrlMaincategories());
        };

        return {
            getMainCategories: getMainCategories
        };
    })
    
})();