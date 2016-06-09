(function(){
    angular.module('leftCategoryPanel', [])

    .directive('lessonCategoryPanel', function() {
        return {
            restrict: 'EA',
            scope: true, // this creates a child scope which inherits from the parent
            templateUrl: "views/templates/lesson_templates/left_categories.html",
            link: function (scope, elem, button) {
                var button = elem.find('.close .fa'),
                    lessonContainer = $('.lesson .col-md-9');
                button.bind('click', function() {
                    elem.toggleClass('in');
                    if (!elem.hasClass('in')) {
                        button.addClass('fa-angle-right').removeClass('fa-angle-left');
                        setTimeout(function(){
                            lessonContainer.css({left: "-180px"});
                        }, 200);
                    } else {
                        lessonContainer.css({left: "0px"});
                        button.removeClass('fa-angle-right').addClass('fa-angle-left');
                    }
                });
            }
        };
    });

})();