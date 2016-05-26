(function() {
    angular.module('models', [
        'appStructure', 
        'appController', 
        'appLessons',
        'ngRoute',
        'backand'
         ])
    .config(function (BackandProvider) {
        /*BackandProvider.setAppName('guitarlessons');
        BackandProvider.setSignUpToken('003c6b69-f0bb-474d-a5af-f4185979d575');
        BackandProvider.setAnonymousToken('90c6dd38-125c-43d9-a27b-18fe44c64590');*/

        BackandProvider.setAppName('models');
        BackandProvider.setSignUpToken('3eb70fdc-01ce-4228-9981-6f64c5be2e74');
        BackandProvider.setAnonymousToken('8d51cd44-48d0-4d0a-b3ec-5c1df5e78fa0');
    });

})();