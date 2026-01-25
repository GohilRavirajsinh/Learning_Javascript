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