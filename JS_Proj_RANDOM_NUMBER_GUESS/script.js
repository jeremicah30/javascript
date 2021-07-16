//Game Value
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//ui elements

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-button');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

//Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess 
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value); // parseInt to become a number not string

    //validate to make sure the input is not less than 1 and greater than 10
    if (guess === NaN || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {
        //disable the input 
        guessInput.disabled = true;
        //border color 
        guessInput.style.borderColor = 'green';
        //set message
        setMessage(`${winningNum} is the correct number!`, 'green');
    } else{
        //wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
        //Game Over
            //disable the input 
            guessInput.disabled = true;
            //border color 
            guessInput.style.borderColor = 'red';
            //set message
            setMessage(`Game Over, You Lost! The correct number was ${winningNum}`, 'red');
        } else {
        //Wrong number
            //clear the input
            guessInput.value = '';
            //border color 
            guessInput.style.borderColor = 'red';
            //set message
            setMessage(`${guess} is wrong number. Guesses left is ${guessesLeft}`, 'red');
        }
    }

});

//set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
};