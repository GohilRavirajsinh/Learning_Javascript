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