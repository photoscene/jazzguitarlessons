(function() {
    angular.module('models', [
        'pageStructure',
        'youtubeCode',
        'soundcloudCode',
        'leftCategoryPanel', 
        'showHideTabs',
        'activeNavs',
        'mainController',
        'loginController',
        'appController',
        'appLessons',
        'ngRoute',
        'backand'
         ])
    .config(function (BackandProvider) {

        /*BackandProvider.setAppName('models');
        BackandProvider.setSignUpToken('3eb70fdc-01ce-4228-9981-6f64c5be2e74');
        BackandProvider.setAnonymousToken('8d51cd44-48d0-4d0a-b3ec-5c1df5e78fa0');*/
    });

})();