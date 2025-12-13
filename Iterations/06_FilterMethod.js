// Filter Method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//1st using filter easy
// const newNums = myNums.filter( (num) => num > 4 ) // this return automatically
// const newNums = myNums.filter((num) => {  // In Scope write return manually
//     return num > 4
// })

//2nd same example using ForEach
const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums);

// Books Example using Array and Object
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

// Print demands of user
let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBooks);