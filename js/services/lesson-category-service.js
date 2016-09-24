(function(){
    angular.module('services', ['backand'])
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

        /*Subcategories*/
        function getUrlSubcategories () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        getCategories = function () {
            return $http.get(getUrlSubcategories());
        };

        return {
            getCategories: getCategories
        };
    })

    

})();
