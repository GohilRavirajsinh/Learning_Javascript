// Can we use For In Loop in Array?? let's See
const Programming = ["js", "rb", "java", "py", "cpp",]

for (const key in Programming) {
    // console.log(key);  // Return Keys
}
for (const key in Programming) {
    // console.log(`in Array For In default key is ${key} and Value is ${Programming[key]}`);
}


// Now MAP also execute in For In Loop?? let's See
const map = new Map() // map apne aap me ek object hai they hold kry Values & All Values are uniqe hoti hai
map.set('IN', "India") // ('Key', "Value")
map.set('UK', "United Kingdom")
map.set('USA', "United States of America")
map.set('Fr', "France") 
map.set('IN', "India")

for (const key in map) {
    console.log(key);   // Blank Answer
}


// In Object For In Loop Execute or not?? 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift'
}

for (const key in myObject) {
    // console.log(key);  // Show Keys of Object
}
for (const key in myObject) {
    // console.log(myObject[key]) // Show Values of Object
}
for (const key in myObject) {
    // console.log(`${key} is for ${myObject[key]}`) // Print Keys and Object
}  // YES