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
