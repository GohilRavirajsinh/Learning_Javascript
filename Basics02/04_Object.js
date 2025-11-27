const tinderUser = {}               // This is non-singleton object
// Add Values
tinderUser.id = "123abc"
tinderUser.name = "Raviraj"
tinderUser.isLoggedIn = false
console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Raviraj', false ]
console.log(tinderUser);                // { id: '123abc', name: 'Raviraj', isLoggedIn: false }
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Raviraj' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
console.log(tinderUser.hasOwnProperty('isLogged'));   // false


const regularUser = {
    email: "goku@gaming.com",
    fullname: {
        userfullname: {
            firstname: "Goku",
            lastname: "Gaming"
        }
    }
}
// console.log(regularUser);  // { email: 'goku@gaming.com', fullname: { userfullname: { firstname: 'Goku', lastname: 'Gaming' } } }
// console.log(regularUser.fullname);  // { userfullname: { firstname: 'Goku', lastname: 'Gaming' } }
// console.log(regularUser.fullname.userfullname);  // { firstname: 'Goku', lastname: 'Gaming' }
// console.log(regularUser.fullname.userfullname.firstname);  // Goku
// console.log(regularUser.fullname.userfullname.lastname);  // Gaming


// Spread Operation
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
const CombineArray = {...obj1, ...obj2, ...obj3}
// console.log(CombineArray);


const players = [
    {
        id: 1,
        email: "gokugamimg@gmail.com"
    },
    {
        id: 1,
        email: "gokugamimg@gmail.com"
    },
    {
        id: 1,
        email: "gokugamimg@gmail.com"
    },
]
players[1].email