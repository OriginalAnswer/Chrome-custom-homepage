// const wArr = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
const wArr = new Array('일요일','월요일','화요일','수요일','목요일','금요일','토요일');
const mArr = new Array(
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        
function getDate() {
    let date = new Date();
    const d = String(date.getDate());
    const m = date.getMonth();
    const y = String(date.getFullYear());
    const dy = String(date.getDay());
    today.innerText = `${y}.${m}.${d}.${wArr[dy]}`;
}
