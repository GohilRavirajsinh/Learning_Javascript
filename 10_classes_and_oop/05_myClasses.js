// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const goku = new User("Goku", "goku@dbz.com", 8563543)
// // console.log(goku)
// console.log(goku.encryptPassword())
// console.log(goku.changeUsername())

// Same code using create Function and Method
// behind the scene of same example

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}ABA`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const Goku = new User("Goku", "goku@dbz.com", 34856324)
console.log(Goku.encryptPassword())
console.log(Goku.changeUsername())