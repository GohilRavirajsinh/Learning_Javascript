const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value); // height here not define cause, here defined height is load with form so stor e empty value inside that time so it cannot run when click on submit!
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  console.log(height);
  console.log(weight);
  console.log(result);

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'give a valid Height!';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'give a valid Weight!';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi < 18.6) {
      result.innerHTML = `<span>Under Weight Ans:${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>Normal Range Ans:${bmi}</span>`;
    } else if (bmi >= 24.9) {
      result.innerHTML = `<span>Overweight Ans:${bmi}</span>`;
    }
  }
});
