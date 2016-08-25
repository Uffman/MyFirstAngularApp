(function () {
    'use strict';

    angular.module('todoApp').config(config);

    config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/home', {
                template: '<home></home>'
            }).
            when('/task', {
                template: '<task-list></task-list>'
            }).
            when('/blog', {
                template: '<blog></blog>'
            }).
            otherwise('/home');
    }

})();