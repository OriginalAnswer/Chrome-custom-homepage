function changeGreeting(){
    const date = new Date();
    const h = date.getHours(); 

    if(h<4){
        greeting.innerText = 'Good Night';
    }else if(h<7){
        greeting.innerText = 'Good Dream🌠';
    }else if(h < 12){
        greeting.innerText = 'Good Morning😊';
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
function printName(){
    greetingShow.innerText = savedName;
}
function addName(e) {
    // e.preventDefault();
    const name = greetingInput.value;
    localStorage.setItem(GREETING_NAME_KEY, name);
    printName();
}
greetingForm.addEventListener('submit', addName);
if (savedName !== null) {
    printName();
};
