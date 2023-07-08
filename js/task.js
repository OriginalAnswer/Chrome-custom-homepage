// taskForm = document.querySelector('#task-form');
// taskShow = document.querySelector('#task-show');
// taskInput = document.querySelector('#task-input');

const TASK_KEY = 'tasks';//로컬스토리지에 저장되는 id 이름
let taskArr = [];//빈 어레이


function deleteTask(e){
    const dv = event.target.parentElement;//e(눌린) 버튼의 어미 노드
    dv.remove();//노드삭제
    taskArr = taskArr.filter(a => a.id !== parseInt(dv.id));
    saveTask();
}

function printTask(a){
    const dv = document.createElement('div');//div 생성
    dv.id = a.id;
    dv.classList.add('task-item');//.task-list를 가진 div 컨테이너
    
    dv.innerHTML = `
    <input type="checkbox" class="task-checkbox" id="">
    <span>${a.text}</span>
    <i class="fas fa-times icon-del" onclick="deleteTask()"></i>
     `;
    taskShow.appendChild(dv);
}

function saveTask(){
    localStorage.setItem(TASK_KEY, JSON.stringify(taskArr));
}
function addTask(e) {
    e.preventDefault();
    const newtask = taskInput.value;
    taskInput.value = "";
    
    const newtaskObj = {
        id: Date.now(),
        text: newtask,
        checked: false
    }
    
    taskArr.push(newtaskObj);//어레이에 넣기
    
    printTask(newtaskObj);
    saveTask();
}

taskForm.addEventListener('submit', addTask);


const savedTask = localStorage.getItem(TASK_KEY);//로컬스토리지에서 데이터(아이템/아이디) 가져오기
if (savedTask !== null) { //비어있지 않으면 아래 동작하기
    const parsedTasks = JSON.parse(savedTask);//객체 분석하기
    tasks = parsedTasks;//"savedTask"저장된 객체 가져오기
    parsedTasks.forEach(printTask);//각 아이템을 printTask에 넣어서 동작시켜라
    taskArr = tasks;
}
