const score = 400
// console.log(score)  // 400

const balance = new Number(400)
// console.log(balance)  // [Number: 400]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2));        // 400.00

const OtherNumber = 2333.5498
// console.log(OtherNumber.toPrecision(6));  // 2333.55
// console.log(OtherNumber.toPrecision(3));  // 2.33e+3

const hundreds = 10000000
// console.log(hundreds.toLocaleString());   // 10,000,000

// ++++++++++++++++++ Maths ++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));  // 4   # negative value convert in positive
// console.log(Math.round(4.6)); // 5 # round of .5+ than incress++ Simple
// console.log(Math.ceil(4.2));  // 5 # .1 than number round of with incress++ 
// console.log(Math.floor(4.2)); // 4 # .1to.9 the number is same round of 
// console.log(Math.min(4,3,6,7)); // 3
// console.log(Math.max(4,3,6,7)); // 7

console.log(Math.random()); // random value under 0 to 1
console.log(   (Math.random()*10) + 1   );  // value define 1+ with clear calculation
console.log(   Math.floor(Math.random()*10) + 1   );  // value define 1+ but single value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // value between min or max