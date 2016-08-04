(function(){
    angular.module('categoryServices', ['backand'])
    /*.service('categoryService', function ($http) {
        
        getMainCategories = function () {
            return $http.get('/js/json/main_categories.json');
        };
        getSubCategories = function (lessonParent) {
            return $http.get('/js/json/subcategories.json');
        };
        
        return {
            getMainCategories: getMainCategories,
            getSubCategories: getSubCategories
        }

    })*/

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

    .service('categoryService', function ($http, Backand) {

        var baseUrl = '/1/objects/';
        var objectName = ['subCategories'];

        /*function getUrlAllLessons () {
            return Backand.getApiUrl() + baseUrl + objectName[0];
        };*/
        /*All Lessons*/
        /*getLessons = function () {
            return $http.get(getUrlAllLessons());
        };*/


        /*Subcategories*/
        function getUrlSubcategories () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        getCategories = function () {
            return $http.get(getUrlSubcategories());
        };

        /*Category Lesson Swith*/
        /*function getUrlSwitch () {
            return Backand.getApiUrl() + baseUrl + objectName[2];
        };

        getSwitch = function () {
            return $http.get(getUrlSwitch());
        };*/

        return {
            //getLessons: getLessons,
            getCategories: getCategories
            //getSwitch: getSwitch
        };
    })

    

})();
