
const HEADER_TEXT_KEY = "header text"
const savedHeaderText = localStorage.getItem(HEADER_TEXT_KEY);
function printHeaderText() {
    headerText.innerText = `${savedHeaderText}`;
    }
function addHeaderText(e) {
    e.preventDefault();
    const t = headerTextInput.value;
    localStorage.setItem(HEADER_TEXT_KEY, t);
    headerText.innerText = `${savedHeaderText}`;
    printHeaderText();
}
headerTextForm.addEventListener('submit', printHeaderText);

if (savedHeaderText !== null) {
    printHeaderText();
}
// `

function syncHeaderText(){
    let syncText = headerTextInput.value;
    headerText.innerText = `${syncText}`;
    localStorage.setItem(HEADER_TEXT_KEY, syncText);
}
// 아래 : 띄어쓰기 키 막기
// onkeypress = "if(event.keyCode == 32) event.returnValue = false;