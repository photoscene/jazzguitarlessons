(function() {
    angular.module('jgl1')
    .config(function($routeProvider){
        $routeProvider
        .when('/scales', { templateUrl: '/views/templates/lesson_templates/scales.html', needAuth: true })
        .when('/chords', { templateUrl: '/views/templates/lesson_templates/chords.html', controller: 'lessonCtrl', needAuth: true })
        .when('/login', { templateUrl: '/views/templates/page_templates/login.html' })
        .when('/pricing', { templateUrl: '/views/templates/page_templates/pricing.html' })
        .when('/why_it_works', { templateUrl: '/views/templates/page_templates/why_it_works.html' })
        .when('/chords/:id', { templateUrl: '/views/templates/lesson_templates/lesson_detail.html', controller: 'lessonCtrl', needAuth: true })
        .when('intermediate/scales/:id', { templateUrl: '/views/templates/lesson_templates/lesson_detail.html', controller: 'lessonCtrl' })
        .when('intermediate/technique/:id', { templateUrl: '/views/templates/lesson_templates/lesson_detail.html', controller: 'lessonCtrl' })
        .when('/', { templateUrl: '/views/templates/page_templates/index.html', })
        /*.otherwise( { redirectTo: '/' } )*/
    });

})();