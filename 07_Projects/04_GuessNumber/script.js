let randomNumber = parseInt(Math.random() * 100 + 1);

const btn = document.querySelector('#subt'); // inputTypeSubmit/btn/
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowORHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas'); // (read atlast when startOver work comes)select whole div for add element

const p = document.createElement('p');
let prevGuess = []; // for show players previous values
let numGuess = 1; // for show players attempts start with 1

let playGame = true; // for allow Player playgame
if (playGame) {
  btn.addEventListener('click', function (e) {
    e.preventDefault(); // it stay value to throughout on the server
    const passGuessNumber = parseInt(userInput.value); // variable to srore user's value for pass
    validateGuess(passGuessNumber); // it pass the value through passGuessNumber variable into validateGuess function that's all to do this if(Control-flow)
    console.log(passGuessNumber); // for check in terminal if it NaN or Empty or value, etc...
  });
}

// Now Create Function
function validateGuess(guess) {
  // for validate numbers is into 1 0r 100 or not!
  if (isNaN(guess)) {
    alert(`please enter a valid number`);
  } else if (guess < 1 || guess > 100) {
    alert('Enter a number between 1 or 100');
  } else {
    prevGuess.push(guess); // for add attamp of the numbers into array
    if (numGuess === 11) {
      // check number of guesses players attempts are over or not that mean it count on >10 than users game are over
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      // here the number attempt is <11 than
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // for check its correct, low, high, equale..
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOOO Low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOOO High!`);
  }
}

function displayGuess(guess) {
  // cleanUpguess
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // Interact with dom and Print Message in <p> tag
  lowORHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id = btnnewGame> Start New Game </button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBTN = document.querySelector('#btnnewGame');
  newGameBTN.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []; // it reset direct
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
