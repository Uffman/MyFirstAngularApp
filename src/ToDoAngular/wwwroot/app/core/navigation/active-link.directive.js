(function() {
    'use strict';

    angular
        .module('core.activeLink')
        .directive('activeLink', activeLink);

    activeLink.$inject = ['$location'];
    
    function activeLink($location) {
        var directive = {
            link: link,
            restrict: 'A' // use as attibute
        };
        return directive;

        function link(scope, element) {
            scope.$on("$routeChangeSuccess", function() {
                var hrefs = [
                    '/#' + $location.path(),
                    '#' + $location.path(),
                    $location.path()
                ];

                angular.forEach(element.find('a'),
                    function(a) {
                        a = angular.element(a);
                        if (-1 !== hrefs.indexOf(a.attr('href'))) {
                            a.parent().addClass('active');
                        } else {
                            a.parent().removeClass('active');
                        };
                    });
            });
        }
    }

})();