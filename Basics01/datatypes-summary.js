/* Primitive
   string, number, boolean, null, undefined, symbol, bigint */

const BGMIevent = "iceland"
const Kill = 590
const KD = 5.80
const IdBan = false
const outsideMap = null  // Datatype Object
let PlayerEmail;  // Undefined

const id = Symbol('123')
const anotherid = Symbol('123')

const bigNumber = 103548424n
console.log(bigNumber);

console.log(id === anotherid) // false

console.log(typeof bigNumber);  // find data type
console.log(typeof outsideMap);  // find data type

/* Non-Primitive / Reference type
   Arrays, Objects, Function */

const heros =["Elvish", "Rajat", "Eisha"] // Array
let myInfo = {  // Store in variable
    name: "Goku",
    id: 5872341440,   
}  // Curly vracket values are Object

// function(){} (Defination -: Function,Paranthases,Curly Braces)
const MyFunction = function(){  // Store in variable
    console.log("I am a Gamer!");
}

// +++++++++++++++++++++++ Memory in JS +++++++++++++++++++++++++++
// Stack (Primitive)

let myYoutube = "GokuPlayzZz"
let anothername = myYoutube  
anothername = "Maverick-Mindsett"

console.log(myYoutube);    // GokuPlayzZz
console.log(anothername);  // Maverick-Mindsett  // Here provide copy not original

// Heap  (Non-Primitive)   
let userRavi = {
    email: "ravigaming@gmail.com",
    rank: "Conqurer"
}
let userKartik = userRavi

userKartik.email = "ravi@google.com"  // Original value Change Direct

console.log(userRavi.email);    // ravi@google.com
console.log(userKartik.email);  // ravi@google.com  // Here provide Reference