// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);  // True
console.log("02" > 1);  // True

console.log(null > 0);  // False
console.log(null == 0);  // False 
console.log(null >= 0);  // True

console.log(undefined > 0); // False
console.log(undefined == 0); // False
console.log(undefined < 0); // False

// Equality check and comparision are work differently (== or >,<)
// == Check value only
// === Strict check value + data type