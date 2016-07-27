(function(){
    angular.module('mainController', ['backand'])

    .controller('mainCtrl', ['$scope', 'auth', '$location', function ($scope, auth, $location){
        //this.user = user;
        $scope.user = {
            loggedIn: true
        };
        $scope.$watch(auth.isLoggedIn, function (value, oldValue) {

            if(!value && oldValue) {
              console.log("Disconnect");
              $location.path('/login');
            }

            if(value) {
              console.log("Connect");
              //Do something when the user is connected
            }
        });
    }]);

})();