(function(){
    angular.module('mainController', ['backand', 'categoryServices'])

    .controller('mainCtrl', function($scope){
        //this.user = user;
        $scope.user = {
            loggedIn: true
        };
    });

})();