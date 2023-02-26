const todoForm = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];

function addTodo() {
  event.preventDefault();
  const todoText = todoInput.value;
  if (todoText) {
    const todo = { id: Date.now(), text: todoText };
    todos.push(todo);
    displayTodo();
    todoInput.value = '';
  }
}

function displayTodo() {
  todoList.innerHTML = '';
  todos.forEach(function(todo) {
    const li = document.createElement('li');
    li.innerHTML = '<span>' + todo.text + '</span><button data-id="' + todo.id + '">Sil</button>';
    todoList.appendChild(li);
  });
}

function deleteTodo() {
  const id = parseInt(event.target.getAttribute('data-id'));
  todos = todos.filter(function(todo) {
    return todo.id !== id;
  });
  displayTodo();
}

todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', deleteTodo);
