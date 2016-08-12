using System.Collections;
using System.Collections.Generic;

namespace ToDoAngular.Repository
{
    public interface ITodoRepository
    {
        void Add(TodoItem item);
        IEnumerable<TodoItem> GetAll();
        TodoItem Find(string key);
        TodoItem Remove(string key);
        void Update(TodoItem item);
        void RemoveAll();
    }
}
