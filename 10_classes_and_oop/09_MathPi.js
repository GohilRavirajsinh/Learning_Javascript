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


const Maps = {
    name: "Erangle",
    size: "8x8",
    isEventAvailable: true,

    mapExpired: function(){
        console.log(`Map has been Expired`)
    }
}
console.log(Object.getOwnPropertyDescriptor(Maps, "name")) // by default 

// we can change here properties for our code

Object.defineProperty(Maps, "name", {
    // writable: false,
    enumerable: false,
    configurable: true
})

Object.defineProperty(Maps, "size", {
    // writable: false,
    enumerable: true,
    configurable: true
})

Object.defineProperty(Maps, "isEventAvailable", {
    // writable: false,
    enumerable: false,
    configurable: true
})
console.log(Object.getOwnPropertyDescriptor(Maps, "name")) // after change

for (let [key, value]  of Object.entries(Maps)) {
    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`)
    }
}