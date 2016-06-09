(function(){
    angular.module('showHideTabs', [])

    .directive('showtab', function () {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    });

})();