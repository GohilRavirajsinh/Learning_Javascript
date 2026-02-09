function Animal (name){
    this.name = name
}

// .prototype is a property available on all Javascript constructor function.
// It allows you to add custom methods and properties that will be shared by all instances created from that constructor.
// In simple words: it's a way to make functions or values aavilable to all objects created from that blueprint.
// now add a method to Animal's prototype:
Animal.prototype.sayhello = function() {
    console.log(`${this.name} say Hello`)
}

const dog = new Animal("Dog")
dog.sayhello()
//--------------------------------------------------------------------

let myName = "Goku      "
let myName2 = "Jinhoo      "

// console.log(myName.length)
// console.log(myName.trim().length)

//--------------------------------------------------------------------

let myHeroes = ["Goku", "Vegeta"]

let heroPower = {
    Goku: "Kamehamehaaaaa",
    Vegeta: "Galickkk gunnn"
}

// you can also add prototype methods to a built-in objects prototype (like an object and array)
Object.prototype.Goku = function () { // Object ka method jo sabhi object me pehle check krega
    console.log("goku is present in all objects (via Object.prototype)");
}

Array.prototype.Vegeta = function(){
    console.log("vegeta is present in Array (via Array.prototype)");
}

// heroPower.Goku() // Error
myHeroes.Goku() // run
myHeroes.Vegeta() // run
// heroPower.Vegeta() // Error

//-----------------------------------------------------------------

// inheritance
const User = {
    name: "Ravi",
    email: "ravi@dbz.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// inherit old syntax
Teacher.__proto__ = User // Now Teacher used all properties of User

// inherit modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // Now Teachings.. used all Teachers Properties

let anothername = 'Gokugaming     '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anothername.trueLength()
"jinhoo    ".trueLength()
"BattelsGroundsMobileIndia     ".trueLength()