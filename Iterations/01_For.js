// For

for (let i = 0; i <= 10; i++) {
    const answer = i;
    if (answer == 5) {
        // console.log(`${answer} is the best middle number!`);
    }
    // console.log(answer);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table Value = ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Value ${i} & Inner Loop Value ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = ["Ravi", "Goku", "Black"]
// console.log(myArray.length)

for (let i = 0; i < myArray.length; i++){
    const answer = myArray[i]
    // console.log(answer);
}

// Break & Continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}