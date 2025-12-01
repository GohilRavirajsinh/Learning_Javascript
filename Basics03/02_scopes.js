// {} scope declaration define with function,if-else,loops etc... / Object are also but that for object declaration 

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


function one() {  // Nested Scope {}
    const nested = "Nested Scopes Print!"

    function two() {
        const game = "Battlegrounds Mobile India"
        console.log(nested)
    }
    // console.log(game);

    two()
    two()
}
// one()


if (true) {   // Nested Scope {}
    const game = "Battlegrounds Mobile India"
    if (game === "Battlegrounds Mobile India") {
        const nestifelse = "Nested If Else"
        console.log(`The Game name is ${game} & this is ${nestifelse} example!`);
    }
    // console.log(nestifelse); //False
    // console.log(game);  // True
}
// console.log(nestifelse);  // False
// console.log(game);  // False