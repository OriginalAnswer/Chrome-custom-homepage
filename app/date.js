const wArr = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
const mArr = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
        
function getDate() {
    const date = new Date();
    const d = String(date.getDate());
    const m = date.getMonth();
    const y = String(date.getFullYear());
    const dy = String(date.getDay());
    today.innerText = `${d} ${mArr[m]} ${y} ${wArr[dy]}`;
}