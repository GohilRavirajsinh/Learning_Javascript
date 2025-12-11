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
    console.log(check);
    console.log(check.languageName);
    console.log(check.languagekey);
    console.log(`language name is ${check.languageName} & shortkey is ${check.languagekey}`);
})