(function () {
    'use strict';

    angular.
        module('blog').
        component('blog', {
            templateUrl: 'app/components/blog/blog.template.html',
            controller: BlogController
        });

    function BlogController() {
        var self = this;

        self.title = 'Blog page';
        self.content = "TODO: Add functionality for blog";
    }

})();