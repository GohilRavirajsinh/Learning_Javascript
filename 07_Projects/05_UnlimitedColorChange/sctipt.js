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
