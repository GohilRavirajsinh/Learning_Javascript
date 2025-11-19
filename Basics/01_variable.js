const bgmiId = 5872145245   // Constant Cannot Change value
let bgmiEmail = "gokugaming@gmail.com"   // Variable
var bgmiPassword = "goku@111"   // Variable
bgmiCity = "Anand"  // This is possible to declare possibility but not preffer to use
// client said to add bgmiState but the state is changed so use let
let bgmiState;  // Answer is Undefiend

// bgmiId = 5875223366 Not Allowed
// bgmiEmail = "goku@gmail.com" Can Chnage 
// bgmiCity = "Bangloru"        Can Chnage

/*
Prefer not to use var
beacuse of issue in block scopr and functional scope
*/

// console.log(bgmiId);
// console.log(bgmiEmail);
// console.log(bgmiPassword);
// console.log(bgmiCity);

console.table([bgmiId, bgmiEmail, bgmiPassword, bgmiCity])