// Immediately Invoked Function Expression (IIFE)
// Named IIFE
(function chai (entertype) {
    console.log(`DB Connected Example of ${entertype}`);
}) (); // Globel scope declaration remove karne ke liye ye use hota hai! or in IIFE end of function semicolun(;) Mendatary for execute secound function.

// UnNamed IIFE
( (type) => {
    console.log(`DB Connected Example of ${type}`);
}) ("2nd");

((type) => {
    console.log(`This is IIFE Examlple of ${type}`);
    
}) ("3rd")