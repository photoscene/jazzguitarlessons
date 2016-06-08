(function(){
    angular.module('mainController', ['backand', 'categoryServices'])

    .controller('mainCtrl', function(){
        this.user = users;
    });

    var users = {
        loggedIn: true
    };

})();