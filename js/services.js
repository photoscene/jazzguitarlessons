(function(){
    angular.module('guitarlessons')
    .service('lessonService', function ($http, Backand) {

        var baseUrl = '/1/objects/';
        var objectName = 'lessons/';

        function getUrl () {
            return Backand.getApiUrl() + baseUrl + objectName;
        };

        getLessons = function () {
            return $http.get(getUrl());
        };

        return {
            getLessons: getLessons
        };
    });
    
})();