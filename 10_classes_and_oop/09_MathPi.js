console.log(Math.PI)
Math.PI = 5
console.log(Math.PI) // it cannot change

const descroptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descroptor) //value: 3.141592653589793,
                        // writable: false,
                        // enumerable: false,
                        // configurable: false // we cannot change this bydefault but but
// aisi object property hai? jise khudse bhi create kar sakte hai? Yesssss for ex
// const myNewObj = Object.create(null) like that

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai(){
        console.log("Chai nhin bani!")
    }
}
console.log(chai)
// now check iski bhi descripor properties hai? or hai to use set kar sakte hai?
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
/*Ans: value: 'ginger chai',
       writable: true,
       enumerable: true,
       configurable: true */
// we can change this property

Object.defineProperty(chai, "name",{ // it change specific for name property
    // writable: false,
    enumerable: false // ye false hai to name vali value niche for loop me nhin jayegi, to aise configuration kar sakte hai ki jitni bhi properties hai vo apne loop ka part hi na bne, to aise #price or sab pe bhi lga sakte jiski bhi need ho.
})
// Now check
console.log(Object.getOwnPropertyDescriptor(chai, "name")) // See result

// iske uper loop lgakar dekh lete hai? lets see
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`)
    }
}