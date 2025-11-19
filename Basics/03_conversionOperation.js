let score = "33"

console.log(typeof score);
console.log(score);

// conversion in string to number
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33"    = 33
// "33abc" = NaN
// true = 1 / false = 0

// conversion in boolean
let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
// 1      = true / 0 = flase
// ""     = false
// "GOKU" = true

// conversion number to string
let IsNum = 33

let ValueInString = String(IsNum)
console.log(typeof ValueInString);
console.log(ValueInString);