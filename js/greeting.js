function changeGreeting(){
    const date = new Date();
    const h = date.getHours(); 

    if(h<4){
        greeting.innerText = 'Good Night';
    }else if(h<7){
        greeting.innerText = 'Good Dream';
    }else if(h < 12){
        greeting.innerText = 'Good Morning';
    } else if (h < 18) {
        greeting.innerText = 'Good Afternoon';
    } else if(h<21){
        greeting.innerText = 'Good Evening';
    }else{
        greeting.innerText = 'Good Night';
    }
}

// ---------------------------------------

const GREETING_NAME_KEY = "greeting name"
const savedName = localStorage.getItem(GREETING_NAME_KEY);
function printName() {
        greetingShow.innerText = `, ${savedName}`;
    }
function addName(e) {
    e.preventDefault();
    const name = greetingInput.value;
    localStorage.setItem(GREETING_NAME_KEY, name);
    greetingShow.innerText = `, ${savedName}`;
    printName();
}
greetingForm.addEventListener('submit', printName);

if (savedName !== null) {
    printName();
}
// `

function syncGreeting(){
    let syncName = greetingInput.value;
    greetingShow.innerText = `, ${syncName}`;
    localStorage.setItem(GREETING_NAME_KEY, syncName);
}
// 아래 : 띄어쓰기 키 막기
// onkeypress = "if(event.keyCode == 32) event.returnValue = false;