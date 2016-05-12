(function() {
    angular.module('guitarlessons')
    .config(function($routeProvider){
        $routeProvider
        .when('/scales', { templateUrl: '/jazzguitarlessons.com/views/templates/intermediate/scales.html', })
        .when('/chords', { templateUrl: '/jazzguitarlessons.com/views/templates/intermediate/chords.html', })
        .when('/', { templateUrl: '/jazzguitarlessons.com/views/templates/structure/index.html', })
        .otherwise( { redirectTo: '/' } )
    });

})();