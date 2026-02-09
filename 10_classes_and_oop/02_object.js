function multiPliedby5(num){
    return num * 5
}
// You can also add properties to functions in JavaScript.
multiPliedby5.power = 2

console.log(multiPliedby5(5))
console.log(multiPliedby5.power)     // (property on function object)
console.log(multiPliedby5.prototype) // (every function gets an empty prototype object by default)

// constructor function  & new

// Constructor is a function which acts like a blueprint for creating 'user' objects - for example sign in form: we enter username,email,password like that 
function createUser(username, email, password){
    this.username = username
    this.email = email
    this.password = password
    // when you use 'new' or 'this' became a new blank object
}
const UserOne = new createUser("Goku", "goku@bgmi.com", 454643)
console.log(UserOne)

// Prototypes and Methods

// Adding a method to the prototype of createUser
// This means All users created by createUser will have access to this function
createUser.prototype.increment = function () {
    this.password++
}

// Another method added to the prototype
createUser.prototype.printMe = function(){
    console,log(`password is ${this.password}`)
}

const jinhoo = new createUser("jinhoo", "jinhoo@sung.com", 438567)
const Coffee = new createUser("Coffee", "coffee@chai.com", 8456773)

console.log(jinhoo)
console.log(Coffee)

// Using new vs. not using new

// If you use 'new createUser("Name", level)':
//  - A new empty object is created
//  - 'this' inside the function refers to that new object
//  - Properties and methods are added to that object
//  - The object is returned automatically

// If you call without 'new', like: createUser("Test", "test@tea.com", 503554)
//  - 'this' refers to the global object (in browser it's 'window'), NOT a new object
//  - It does NOT return the proper user object
//  - Variables won't be assigned as you'd expect
// (So always call constructor function with 'new')