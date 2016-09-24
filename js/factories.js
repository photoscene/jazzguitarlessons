(function () {
    'use strict';

    angular.module('app.factory', [])
        .factory('loginFactory', loginFactory);

    loginFactory.$inject = ['$rootScope', 'facebookUser'];
    
    var facebookLoggedIn = false;
    
    function getFacebookStatus() {
        return facebookLoggedIn;
    };

    function loginFactory($rootScope, facebookUser) {

        $rootScope.$on('fbLoginSuccess', function (name, response) {
            facebookUser.then(function (user) {
                user.api('/me').then(function (response) {
                    console.log(response);
                });
                facebookLoggedIn = response.status === 'connected';
                console.log(facebookLoggedIn);
            });
        });

        $rootScope.$on('fbLogoutSuccess', function () {
            $rootScope.$apply(function () {
                $rootScope.loggedInUser = {};
            });
        });

        return {
            getFacebookStatus: getFacebookStatus
        };
    };

})();
