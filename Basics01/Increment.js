// Postfix or Prefix Increment

// Postfix 
let x = 3
const y = x++
console.log(x);  // 4
console.log(y);  // 3
// In Postfix const value change before the assignment are executed.
// That means before assignment x is 3 so y is 3 and x is 4 after increment
// First num is answer, no matter increment ++ 

// Prefix
let a = 3;
const b = ++a;
console.log(a);  // 4
console.log(b);  // 4
// In Postfix const value change after the assignment are executed.
// That means after assignment x is 4 so y is 4
// First increment with the value and the final answer 