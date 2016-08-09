(function(){
    angular.module('mainController', ['backand'])

    .controller('mainCtrl', function($rootScope, $scope, facebookUser) {
    $rootScope.loggedInUser = {};

    $rootScope.$on('fbLoginSuccess', function(name, response) {
      facebookUser.then(function(user) {
        user.api('/me').then(function(response) {
          $rootScope.loggedInUser = response;
          console.log($rootScope.loggedInUser);
        });
      });
    });

    $rootScope.$on('fbLogoutSuccess', function() {
      $scope.$apply(function() {
        $rootScope.loggedInUser = {};
      });
    });
  });


})();