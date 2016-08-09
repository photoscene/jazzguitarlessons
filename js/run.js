(function(){
    angular.module('facebookLogIn', ['facebookUtils', 'ngRoute'])

    .constant('facebookConfigSettings', {
        'appID' : '1256806504343777',
        'routingEnabled' : true,
        'channelFile'    : 'channel.html'
    });

})();