(function() {
    angular.module('guitarlessons')
    .config(function($routeProvider){
        $routeProvider
        .when('/scales', { templateUrl: '/views/templates/intermediate/scales.html', })
        .when('/chords', { templateUrl: '/views/templates/intermediate/chords.html', controller: 'lessonCtrl' })
        .when('/login', { templateUrl: '/views/templates/structure/login.html', })
        .when('/chords/:id', { templateUrl: '/views/templates/structure/lesson_detail.html', controller: 'lessonDetailCtrl' })
        .when('/', { templateUrl: '/views/templates/structure/index.html', })
        /*.otherwise( { redirectTo: '/' } )*/
    });

})();