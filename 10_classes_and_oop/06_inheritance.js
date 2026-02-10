class User {
    constructor(username){
        this.username = username
    }
    
    logMe() {
        console.log(`The name is : ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCource(){
        console.log(`New cource was added by ${this.username}`)
    }
}

const goku = new User ("Goku")
const Carry = new Teacher ("Carry", "carry@gmail.com", 2354533)
goku.logMe()
// goku.addCource() // error find why you got your ans..
Carry.logMe()
Carry.addCource()

console.log(goku === Carry) // false
console.log(goku === Teacher) // false
console.log(goku instanceof User) // true
console.log(goku instanceof Teacher) // false
console.log(Carry instanceof User) // true
console.log(Carry instanceof Teacher) // true