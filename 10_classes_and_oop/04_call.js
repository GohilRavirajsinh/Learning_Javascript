function setUsername(username) {
    this.username = username
}

// constructor function to create a user object
function createUser(username, email, password) {
    setUsername.call(this.username) // call use karne se setusername() function idhar call hota hai,else vo vahi se run hoke stack se bahar chala jayega! or 'this' use karne se vo username idhar call hoga - generally this use karne se vo sabhi paranthases dusre function ko de deta hai

    this.email = email
    this.password = password
}

const goku = new createUser("Goku", 'goku@dbz.com', 2368634)
console.log(goku)