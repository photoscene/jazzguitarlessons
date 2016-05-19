(function(){
    angular.module('appController', ['backand']) /*, 'lessonService'*/

    .controller('navCtrl', function(){
        this.selectNav = function (setNav){
            this.nav = setNav;
        };
        this.isSelected = function (checkNav){
            return this.nav === checkNav;
        };
    })

    .controller('mainCtrl', function(){
        this.user = users;
    });

    var users = {
        loggedIn: true
    };

})();