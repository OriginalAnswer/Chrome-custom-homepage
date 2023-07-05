
const TODOS_KEY = 'todos';//로컬스토리지에 저장되는 id 이름
let todosArr = [];//빈 어레이
const savedTodo = localStorage.getItem(TODOS_KEY);//로컬스토리지에서 데이터(아이템/아이디) 가져오기



function printTodo(a){
    const dv = document.createElement('div');//div 생성
    dv.id = a.id;//?
    dv.classList.add('box-todo-item');//.todo-list를 가진 div 컨테이너

    const span = document.createElement('span');//span 생성
    span.innerText = a.text;//span 안에 a의 택스트 값을 넣음

    const delBtn = document.createElement('i');//아이콘생성
    delBtn.classList.add('fas', 'fa-times');//x아이콘생성
    
    delBtn.addEventListener("click", deleteTodo);//누를시 deleteTodo 작동
    dv.appendChild(span);
    dv.appendChild(delBtn);
    todoShow.appendChild(dv);
    // #box-todo-item>span+delBtn = dv
    //   >>> #todo-show 안에 위의 dv를 넣는다.
    // a는 
}


function deleteTodo(e){
    const dv = e.target.parentElement;//e(눌린) 버튼의 어미 노드
    dv.remove();//노드삭제
    todosArr = todosArr.filter(a => a.id !== parseInt(dv.id));
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todosArr));
    // 로컬 스토리지에 저장
    //      ^
    // KEY 이름(todos), 어레이의 값을 웹에 저장할수 있는 언어(JSON)로 변환
}
function addTodo(e) {
    e.preventDefault();//submit 시 새로고침 정지
    const newtodo = todoInput.value;//submit 누른 인풋 값
    todoInput.value = "";//

    const newtodoObj = {
        text:newtodo,//submit 누른 인풋 값
        id:Date.now(),
    }

    todosArr.push(newtodoObj);//어레이에 넣기
    
    printTodo(newtodoObj);
    saveTodo();
}

todoForm.addEventListener('submit', addTodo);


if (savedTodo !== null) { //비어있지 않으면 아래 동작하기
    const parsedTodos = JSON.parse(savedTodo);//객체 분석하기
    todos = parsedTodos;//"savedTodo"저장된 객체 가져오기
    //"parsed" 뜻 : 분석된
    parsedTodos.forEach(printTodo);//각 아이템을 printTodo에 넣어서 동작시켜라
    todosArr = todos;
// ^^^^새로고침후 submit 시 덮어씌워지던 거 해결!
}
