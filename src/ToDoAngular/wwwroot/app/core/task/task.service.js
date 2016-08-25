(function () {
    'use strict';

    angular
        .module('core.task')
        .service('TodoService', TodoService);

    TodoService.$inject = ['$http'];

    function TodoService($http) {
        var apiUrl = 'api/todo';

        function getTodos() {
            return $http(
                {
                    method: 'GET',
                    url: apiUrl
                });
        }

        function create(todo) {
            return $http(
                {
                    method: 'POST',
                    url: apiUrl,
                    data: todo
                });
        }

        function update(todo) {
            return $http(
                {
                    method: 'PUT',
                    url: apiUrl + '/' + todo.key,
                    data: todo
                });
        }

        function remove(id) {
            return $http(
                {
                    method: 'DELETE',
                    url: apiUrl + '/' + id,
                    data: id
                });
        }

        function removeAll() {
            return $http(
               {
                   method: 'DELETE',
                   url: apiUrl
               });
        }

        this.getTodos = getTodos;
        this.create = create;
        this.update = update;
        this.remove = remove;
        this.removeAll = removeAll;
    }
})();