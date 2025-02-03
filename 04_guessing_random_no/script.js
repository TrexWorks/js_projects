const randomNumber = parseInt(Math.random() * 100 - 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector(".resultParas");
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;
let playGame = true;
let maxAllowedGuess = 10;
if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // return Number 1-100
    if(isNaN(guess)){
        alert('Please enter a valid number');
        return;
    }
    if(guess < 1 ){
        alert('Please enter a valid number between 1 and 100');
        return;
    }
    if( guess > 100){
        alert('Please enter a valid number between 1 and 100');
        return;
    }
    prevGuess.push(guess)
    if(numGuess === 9){
        displayGuess(guess);
        displayMessage(`Game Over. Random Number was ${randomNumber}`)
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
        
    }
 
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You Guessed it right`)
        endGame();
    }
    else if (guess < randomNumber){
        displayMessage(`Number is too Low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is too High`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess ++;
    remaining.innerHTML = `${maxAllowedGuess - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function (e) {
        userInput.value = '';
        userInput.removeAttribute('disabled');
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${maxAllowedGuess}` 
        numGuess = 0;
        maxAllowedGuess = 10;
        playGame = true;
    })
    
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','true');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
