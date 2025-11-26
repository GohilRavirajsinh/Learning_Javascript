const name = "GokuPlayzZz"
const id = 5872341440

// This is old using not recommended to use, new in NEW GEN...
// console.log(name + id + " Conquror"); 

// NEW GEN Using Back Tacks. Here string Interpolation(``) to create a PLACE HOLDERS (${})
console.log(`My BGMI name is ${name} and id is ${id}.`);

const gameName = new String('Battlegrounds-Mobile-India')
console.log(gameName[0]);     // Index
console.log(gameName.__proto__);    // {} Bracket Symbol
console.log(gameName.length);   // Length
console.log(gameName.toUpperCase());  // Uppercase
console.log(gameName.charAt(7));   // Char position
console.log(gameName.indexOf('r'));  // Char number 

const StoreVariable = gameName.substring(0,4)  // substring
console.log(StoreVariable);

const anotherVariable = gameName.slice(-12,4)  //Slice Not Working 
console.log(anotherVariable);

const newWord = "   Practice   "
console.log(newWord);
console.log(newWord.trim());  // Trim

const url = "https://gaming.com/game%20goku"
console.log(url.replace('%20', '-'));    // url.Replace
console.log(url.includes('gaming'));          // url.include

console.log(gameName.split('-'));    // Split to convert into Array using any symbol 
// Ex-('Battlegrounds-Mobile-India')  // Ans-[ 'Battlegrounds', 'Mobile', 'India' ]