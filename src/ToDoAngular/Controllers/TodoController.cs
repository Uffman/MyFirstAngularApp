using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ToDoAngular.Repository;
using System.Web.Http;
using System.Net.Http;
using System.Net;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoAngular.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        public ITodoRepository TodoItems { get; set; }

        public TodoController(ITodoRepository todoItems)
        {
            TodoItems = todoItems;
        }

        public IEnumerable<TodoItem> GetAll()
        {
            return TodoItems.GetAll();
        }

        [HttpGet("{id}", Name = "GetToDo")]
        public IActionResult GetById(string id)
        {
            var item = TodoItems.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
        
        [HttpPost]
        public void Post([FromBody]TodoItem todo)
        {
            if (todo == null)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest));
            }
            TodoItems.Add(todo);
        }

        [HttpPut("{id}")]
        public void Update(string id, [FromBody]TodoItem item)
        {
            if (item == null || item.Key != id)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest));
            }
            var todo = TodoItems.Find(id);
            if (todo == null)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest));
            }

            TodoItems.Update(item);            
        }

        [HttpPatch("{id}")]
        public void Update([FromBody] TodoItem item, string id)
        {
            if (item == null)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest));
            }

            var todo = TodoItems.Find(id);
            if (todo == null)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest));
            }

            item.Key = todo.Key;
            TodoItems.Update(item);            
        }
        
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var todo = TodoItems.Find(id);
            if (todo == null)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest));
            }
            TodoItems.Remove(id);
        }

        [HttpDelete]
        public void Delete()
        {
            TodoItems.RemoveAll();
        }
    }
}
