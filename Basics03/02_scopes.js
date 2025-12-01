// {} scope declaration define with function,if-else etc... / Object are also but that for object declaration 

// the globel scope
var c = 300
let a = 300

// the block scope
if (true) {
    let a = 10
    const b = 20
    c = 30
    console.log("block scope: ", a);
}

console.log("globel scope: ", a);
// console.log(b);
// console.log(c);