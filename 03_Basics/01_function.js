// console.log("G");
// console.log("O");
// console.log("K");
// console.log("U"); // print 3 times
// console.log("G");
// console.log("O");
// console.log("K");
// console.log("U");
// console.log("G");
// console.log("O");
// console.log("K");
// console.log("U");
function Saymyname() {
    console.log("G");
    console.log("O");
    console.log("K");
    console.log("U");  // print 3 times
}
// Saymyname() // function call first time
// Saymyname() // function call second time
// Saymyname() // function call third time


// 2...............
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2) {
    // first method
    let result = number1 + number2
    // console.log("Goku");
    return result

    // second method
    // return number1 + number2
}
// addTwoNumbers(3, 5)
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


// 3...............
function loginUserMessage(username = "Default") { // This username is define for by default, for example if any value define by default than use this!
    if (!username) { // Execute when Default value not called 
        console.log("Please enter the username");
        return
    }
    return `${username} Just logged in`
}
// console.log(loginUserMessage())  // Call Default Direct
// console.log(loginUserMessage("Goku"))

function calculateCartPrice(val1, val2, ...num1) {  // ...num(Rest Operator) combine all values in array
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 2000))

//*************************
const User = {
    username: "Ravirajsinh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`)
}
handleObject(User) // using object

function handleWithoutObject(anyObjectuser, anyObjectPrice) {
    console.log(`Username is ${anyObjectuser} and Price is ${anyObjectPrice}`)
}
handleWithoutObject("Ravi", "199") // Without object

//*************************
const myNewArray = [200, 400, 500, 1000]
function ArrayHandleFunction(getArray){
    return getArray[1]
}
// console.log(ArrayHandleFunction(myNewArray))
console.log(ArrayHandleFunction([200, 345, 599, 1000]))