const coding = ["js", "ruby", "Java", "python", "c++"]

// coding.forEach( function (item) { // callback function ka name nhin hota
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function PrintMe(item) {
//     console.log(item);
// }
// coding.forEach(PrintMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

                    // Store in Object
const myCoding = [
    {
        languageName: "JavaScript",
        languagekey: "js",
    },
    {
        languageName: "Java",
        languagekey: "java",
    },
    {
        languageName: "Python",
        languagekey: "py",
    },
]

myCoding.forEach( (check) => {
    // console.log(check);
    // console.log(check.languageName);
    // console.log(check.languagekey);
    // console.log(`language name is ${check.languageName} & shortkey is ${check.languagekey}`);
})


                    // Store in Variable
const mycodes = ["JS", "PHP", "JAVA", "PY", "C++"]

const Store = mycodes.forEach( (item) => {
    // console.log(item);
    return item
} )
// console.log(Store);  // Return Undefined