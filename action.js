.directive('sameHeightAs', function ($window, $timeout) {
    return {
        restrict: 'A',
        scope: {
            substract: '@substract',
            add: '@add'
        },
        link: function (scope, element) {
            var bindIt = function () {
                if($window.innerWidth <= 991){
                    element.height('auto') ;
                    element.css({'overflow': 'visible'});
                    return;
                }
                var subst = scope.substract ? scope.substract : 0;
                var add = scope.add ? scope.add : 0;
                var height = (parseInt(add) + ($(element.attr('same-height-as')).height())) - subst;
                $(element).css({'overflow': 'hidden', 'height': height + 'px'});
            };
            bindIt();
            angular.element($window).bind('resize', function () {
                bindIt();
            });
        }
    };
})
