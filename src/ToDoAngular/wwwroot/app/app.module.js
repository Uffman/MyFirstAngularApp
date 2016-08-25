(function () {
    'use strict';

    angular.module('todoApp', [
        // Angular modules
        'ngRoute',

        // Custom modules
        'core',
        'home',
        'taskList',
        'blog'
    ]);
})();