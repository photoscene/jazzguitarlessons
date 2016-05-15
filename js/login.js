/*angular.module('guitarlessons', [])
    .run(['$rootScope', '$location', 'authProvider', function ($rootScope, $location, authProvider) {
        $rootScope.$on('$routeChangeStart', function (event) {

        if (!authProvider.isLoggedIn()) {
              console.log('DENY : Redirecting to Login');
              event.preventDefault();
              $location.path('/login');
        }
        else {
            console.log('ALLOW');
        }
    })

}])*/

/*angular.module('guitarlessons')
  .factory('authProvider', function() {
    var user;
      return {
        setUser : function(aUser){
          user = aUser;
        },
        isLoggedIn : function(){
          return(user)? user : false;
        }
      };
  });*/