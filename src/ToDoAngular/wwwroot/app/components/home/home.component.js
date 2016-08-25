(function () {
    'use strict';

    angular.
        module('home').
        component('home', {
            templateUrl: 'app/components/home/home.template.html',
            controller: HomeController
        });

    function HomeController() {
        var self = this;

        self.title = 'Home page';
    }

})();