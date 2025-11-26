// All About Concatination & Combine Array
const ranked = ["Erangle", "Livik", "Miramar", "Sanhok"]
const unranked = ["Arena", "Quick-Match", "Sniper-Training", "Wow-Mode"]

ranked.push(unranked)
console.log(ranked);  // ['Erangle','Livik','Miramar','Sanhok',[ 'Arena', 'Quick-Match', 'Sniper-Training', 'Wow-Mode']]
console.log(ranked[4]); // [ 'Arena', 'Quick-Match', 'Sniper-Training', 'Wow-Mode' ]
console.log(ranked[4][1]); // Quick-Match

const allmaps = [...ranked, ...unranked]  // spread operator
console.log(allmaps);  // ['Erangle','Livik','Miramar','Sanhok', 'Arena', 'Quick-Match', 'Sniper-Training', 'Wow-Mode' ]

const maps = ranked.concat(unranked)  // concat operator
console.log(maps);     // ['Erangle','Livik','Miramar','Sanhok', 'Arena', 'Quick-Match', 'Sniper-Training', 'Wow-Mode' ]

// Flat operator same as spread and concat
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [4, 5, [6, 7]]]
const flat_another_array = another_array.flat(Infinity); // flat(2)
console.log(flat_another_array); // [1, 2, 3, 4, 5, 6, 7, 8, 4, 5, 6, 7]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.isArray("Goku")) // answer is 'false'
console.log(Array.from("Goku"))  // it create an array like ['G', 'o', 'k', 'u'] ("")--> True ("","")--> False its going error
console.log(Array.from({name: "Goku"}))  // Empty Array - That cannot convert like ({name: "Goku"})
console.log(Array.of(score1, score2, score3)); // it create an Array to defines variables using OF method