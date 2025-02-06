const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const body = document.querySelector('body');

let intervalId;

const generateRandomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

function changeBgColor(){
    body.style.backgroundColor = generateRandomColor();
}

const startChangingColor = () => {
    console.log("STARTED")
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
    
}

const stopChangingColor = () => {
    console.log("STOPPED")
    clearInterval(intervalId);
    intervalId = null; // good coding practice
}

startButton.addEventListener('click',startChangingColor);
stopButton.addEventListener('click',stopChangingColor);

