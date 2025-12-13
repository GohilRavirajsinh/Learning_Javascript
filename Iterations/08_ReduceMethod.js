myNum = [1, 2, 3, 4]

const sumWithInitial = myNum.reduce(function (acc, currentvalue) {
    console.log(`accumilator ${acc} & currentvalue ${currentvalue}`); /// Check value of reduce how it works
    return acc + currentvalue
}, 0) // this 0 is from start value 
console.log(sumWithInitial); // Ans 10

// Arrow function
const ArrowSumWithInitial = myNum.reduce((acc, currentvalue) => acc + currentvalue, 0) // Arrow is Easy
console.log(ArrowSumWithInitial);


// 2nd Example
const shoppingCart = [
    {
        itemname: "Js Cource",
        price: 2999
    },
    {
        itemname: "Python",
        price: 999
    },
    {
        itemname: "Mobile Dev Cource",
        price: 9999
    },
    {
        itemname: "data science cource",
        price: 12999
    }
]

const PriceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(PriceToPay);