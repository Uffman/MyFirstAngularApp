(function() {
    'use strict';

    angular.
        module('taskList').
        component('taskList', {
            templateUrl: 'app/components/task/task.template.html',
            controller: TodoController
        });

    TodoController.$inject = ['TodoService'];

    function TodoController(TodoService) {
        var self = this;

        self.title = 'My First Angular App';
        self.todo = {};
        self.todos = [];
        self.isTodoListVisible = function () {
            return self.todos.length > 0;
        }

        function getTodos() {
            TodoService.getTodos().success(function (response) {
                self.todos = response;
            });
        }

        function create() {
            var todo = {
                name: self.todo.name,
                isComplete: self.todo.isComplete
            };

            TodoService.create(todo).then(function () {
                self.todo.name = "";
                getTodos();
            });
        }

        function remove(id) {
            TodoService.remove(id).then(function () {
                getTodos();
            });
        }

        function update(todo) {
            TodoService.update(todo).then(function () {
            });
        }

        function removeAll() {
            TodoService.removeAll().then(function () {
                getTodos();
            });
        }

        self.create = create;
        self.update = update;
        self.remove = remove;
        self.removeAll = removeAll;
        getTodos();
    }

})();