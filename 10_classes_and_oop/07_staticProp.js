class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`The name is : ${this.username}`)
    }

    static createId(){  // using static to private method
        return `Random number generated in private field ${Math.floor(Math.random() * 1000)}`
    }
}

const goku = new User("Goku")
// console.log(goku.createId()) // error cuase its static method 

class AnotherId extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iPhone = new AnotherId("IPhone", "iphone@17.com")
// console.log(iPhone.createId()) // error cuase its static (private)