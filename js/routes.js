(function() {
    angular.module('guitarlessons')
    .config(function($routeProvider){
        $routeProvider.when('/scales', {
            templateUrl: '/views/templates/intermediate/scales.html',
        })
        .when('/chords', {
            templateUrl: '/views/templates/intermediate/chords.html',
        })
        .when('/', {
            templateUrl: '/views/templates/structure/index.html',
        })
        .otherwise( { redirectTo: '/' } )
    });

})();