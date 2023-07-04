
const TODOS_KEY = 'todos';
let todosArr = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todosArr));
}
function deleteTodo(e){
    const li = event.target.parentElement;
    li.remove();
    todosArr = todosArr.filter(a => a.id !== parseInt(li.id));
    saveTodo();
}
function addTodo(e){
    e.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value = "";
    const newtodoObj = {
        text:newtodo,
        id:Date.now(),
    }
    todosArr.push(newtodoObj);
    printTodo(newtodoObj);
    saveTodo();
}

function printTodo(n){
    const li = document.createElement('div');
    li.id = n.id;
    li.classList.add('li');

    const span = document.createElement('span');
    span.innerText = n.text;

    const btn = document.createElement('i');
    btn.classList.add('fas', 'fa-times');
    
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}


todoForm.addEventListener('submit', todoSubmit);
const savedTodo = localStorage.getItem(TODOS_KEY);
if(savedTodo !== null){
    const parsedTodos = JSON.parse(savedTodo);
    todos = parsedTodos;
    parsedTodos.forEach(printTodo);
}