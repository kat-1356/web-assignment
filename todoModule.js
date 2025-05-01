 // Q5: Todo Module using Closure
function createTodoModule() {
  let todos = [];

  return {
    addTodo(task) {
      if (typeof task !== 'string' || task.trim() === '') return 'Invalid task';
      todos.push(task);
    },
    removeTodo(index) {
      if (index < 0 || index >= todos.length) return 'Invalid index';
      todos.splice(index, 1);
    },
    listTodos() {
      return [...todos];
    },
    clearTodos() {
      todos = [];
    }
  };
}

const todo = createTodoModule();
todo.addTodo("Buy milk");
todo.addTodo("Walk dog");
console.log(todo.listTodos());
todo.removeTodo(0);
console.log(todo.listTodos());
todo.clearTodos();
console.log(todo.listTodos());
