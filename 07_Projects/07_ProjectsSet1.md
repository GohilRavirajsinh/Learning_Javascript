# Projects related to Dom

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-9bvtsvz1?file=1-colorChanger%2Fstyle.css,1-colorChanger%2Fchaiaurcode.js,index.html)

# Solution Code

## Project 1 Color Change

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((buttons) => {
  console.log(buttons);
  buttons.addEventListener('click', function (e) {
    // e is an Event object
    console.log(e);
    console.log(e.target);
    // Using If Else Iteration
    /* if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey'; // write like this to change color
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; // write like this also its professional
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    } else {
      console.log('Breck');
    } */

    // Using Switch Statement
    switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor = 'grey'
            break;
        case 'white':
            body.style.backgroundColor = e.target.id
            break;
        case 'blue':
            body.style.backgroundColor = e.target.id
            break;
        case 'yellow':
            body.style.backgroundColor = e.target.id
        default:
            console.log('Break');
            break;
    }
  });
});

```

## project 2 BMI Calculator

```javascript
const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value); // height here not define cause, here defined height is load with form so stor e empty value inside that time so it cannot run when click on submit!
form.addEventListener('submit', function (e) {
  e.preventDefault(); // it is stop form to send browser
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = ((height * weight) / 1000).toFixed(2);
    // show result
    results.innerHTML = `<span>${bmi}</span>`; // print ans
    // check weight range
    const bmi_weight = document.querySelector('#bmi-weight');
    if (bmi <= 18.6) {
      bmi_weight.innerHTML = `Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      bmi_weight.innerHTML = `Normal Range`;
    } else if (bmi >= 24.9) {
      bmi_weight.innerHTML = `Overweight`;
    }
  }
});
```

## Project 3 RealTimeClock
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

// setInterval - is a run on methods, give them interval to run again and again. method have 2 Parameters
// Syntax setInterval(function(){},IntervalTiming)
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); // it print on terminal so it cannot see in html page so using direct id.innerHTML
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 = 1sec its millisec..

```

## Project 4 Guess The Number Game
```javascript
let randomnumber = parseInt(Math.random() * 100 + 1);

const btn = document.querySelector('#subt'); // inputTypeSubmit/btn/
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowORHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

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
  } else if (guess < 1) {
    alert(`please enter more than 1`);
  } else if (guess > 100) {
    alert(`please enter less than 100`);
  } else {
    prevGuess.push(guess); // for add attamp of the numbers into array
    if (numGuess === 11) {
      // check number of guesses players attempts are over or not that mean it count on >10 than users game are over
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomnumber}`);
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
  if (guess === randomnumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomnumber) {
    displayMessage(`Number is TOOOO Low!`);
  } else if (guess > randomnumber) {
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
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []; // it reset direct
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

## Project 5 Unlimited Color Change

```javascript
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');
let setIntervalId;

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor()); // it generate random colorCode

const colorChange = function () {
  body.style.backgroundColor = randomColor();
};
// console.log(colorChange()); // it change color

start.addEventListener('click', function () {
  setIntervalId = setInterval(colorChange, 1000);
  console.log('Started');
});
stop.addEventListener('click', function () {
  clearInterval(setIntervalId);
  setIntervalId = ''; // null value after clicking stop
  console.log(setIntervalId); // see value is null or not
  console.log('Stopped');
});

```

## Project 6 PressKey & See Magic

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>

  </table>
  </div>
  `;
});
```