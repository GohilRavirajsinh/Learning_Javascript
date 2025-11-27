// singleton --> Create using constuctor like --> Object.create
// const tinderUser = new Object()  // This is singleton object

// Symbol Declaration
const mySym = Symbol("Key1")

// Object literals --> // non-singleton object
const JsUser = {
    name: "BGMI",                           // name is by default string
    age: 28,                                // age is by default number
    "full name": "Ravirajsinh Gohil",       // full name is string but call using ["full name"] for print without (.)
    [mySym]: "stringKey1",
    city: "Gujarat",                        // city is string
    email: "goku@gmail.com",                // email is email
    isLoggedIn: true,                       // isLoggedIn is boolean
    lastPlayingDays: ["Monday", "Sunday"]   // This is by default Array
}
// How to access object
// console.log(JsUser.email);      // default call
// console.log(JsUser["full name"]);  // call String
// console.log(JsUser[mySym]);  // call Symbol

JsUser.email = "ravi@bgmi.com"  // Changed Value
// Object.freeze(JsUser)
JsUser.email = "ravi@microsoft.com"  // This will be freeze
// console.log(JsUser);  // Check Object Value

JsUser.greeting = function(){  // Create function, run like Method
    console.log("This is a simulation game in a virtual world!");
}
JsUser.greetingTwo = function(){  // Create function, run like Method
    console.log(`This ${this.name} is a simulation game in a virtual world!`);
}
console.log(JsUser.greeting()); //If Error comes then check object freeze?
console.log(JsUser.greetingTwo());