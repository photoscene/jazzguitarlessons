(function(){
    angular.module('soundcloudCode', [])

    .directive('trackSoundcloud', function ($sce) {
    return {
        restrict: 'E',
        scope: {
            soundCloudCode: '=',
        },
        template: '<iframe width="100%" height="150" scrolling="no" frameborder="no" src="{{link}}" auto_play="false"></iframe>',
        link: function (scope) {
            scope.$watch('soundCloudCode', function (newValue) {
               if (newValue) {
                   scope.link = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + newValue + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
               }
            });
        }
    };
});

})();