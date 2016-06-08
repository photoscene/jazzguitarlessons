(function() {
    angular.module('models')
    .config(function($routeProvider){
        $routeProvider
        .when('/scales', { templateUrl: '/views/templates/lesson_templates/scales.html', })
        .when('/chords', { templateUrl: '/views/templates/lesson_templates/chords.html', controller: 'lessonCtrl' })
        .when('/login', { templateUrl: '/views/templates/page_templates/login.html', })
        .when('/chords/:id', { templateUrl: '/views/templates/lesson_templates/lesson_detail.html', controller: 'lessonCtrl' }) /*/:parent/chords/:id*/
        .when('intermediate/scales/:id', { templateUrl: '/views/templates/lesson_templates/lesson_detail.html', controller: 'lessonCtrl' })
        .when('intermediate/technique/:id', { templateUrl: '/views/templates/lesson_templates/lesson_detail.html', controller: 'lessonCtrl' })
        .when('/', { templateUrl: '/views/templates/page_templates/index.html', })
        /*.otherwise( { redirectTo: '/' } )*/
    });

})();