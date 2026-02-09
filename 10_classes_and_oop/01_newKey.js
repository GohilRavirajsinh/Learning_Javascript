const user = {
    username: 'Goku',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){ // function ko hum object ke andar rakhte hain → tab wo us object ka method ban jata hai.
        // console.log("Got users details from database!")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}
// console.log(user)
// console.log(user.username)
// console.log(user.getUserDetails())

function User(username, loginCount, signedIn) {
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn
    return this
}

const UserOne = User("Bansi", 4, true)
const UserTwo = User("Ravi", 40, 587234) // it ovverride value when we not use new keyword
console.log(UserOne)

// # new Keyword
//Step1- when we use new Keyword than an empty object is create that called #Instance. jitni bar new keyword likhenge utni bar ne paranthesis generate honge or nya object create hota hai
//Step2- new key word ke karan ek nya constructor function call hota hai or vo jitne bhi arguments vgera hai usko de deta hai.
//Step3- this keyword me arguments vgera likhe hai vo function ke ander mil jate hai

/* In Short
 Step1- pehle object create hoga
 Step2- arguments like this.username=username.. ye sab object me passon ho jayega
 Step3- third jo this create huaa hai usme addon ho jayega or fir mil jayega 
 */