(function() {
    angular.module('jgl1', [
        'pageStructure',
        'youtubeCode',
        'soundcloudCode',
        'logIn',
        'leftCategoryPanel', 
        'showHideTabs',
        'activeNavs',
        //'loginController',
        'mainController',
        'appController',
        'facebookLogIn',
        'appLessons',
        'ngRoute',
        'backand'
         ])
    .config(function (BackandProvider) {
        BackandProvider.setAppName('jgl1');
        BackandProvider.setSignUpToken('adedf94b-270c-4d6e-ba0d-5af57b682ad7');
        BackandProvider.setAnonymousToken('61e149d7-d4a0-4ee8-a557-fcd7a061c7e4');
    });

})();