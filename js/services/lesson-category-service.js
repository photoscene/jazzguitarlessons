(function(){
    angular.module('categoryServices', ['backand'])
    .service('categoryService', function ($http) {
        
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

    });
})();
