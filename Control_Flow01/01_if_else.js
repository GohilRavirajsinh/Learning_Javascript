// const number = 3
// if (number < 2) {
//     console.log("Condition is true");
// } else {
//     console.log("Condition is false");   
// }


// const checkCondition = true
// if (checkCondition == 0) {
//     console.log("True");
// } else {
//     console.log("False");
// }


// const Score = 200
// if (Score >= 1 && Score <= 499) {
//     console.log("Score is less than 500");
// }
// else if (Score >= 500 && Score <= 999) {
//     console.log("Score is greater than 500");
// }
// else if (Score == 1000) {
//     console.log("1st Rank of All Candidates!");
// } 
// else {
//     console.log("Check the number!!");
// }
                                            // Assignment & Logical Operator
                      ////////////////////// <, >, <=, >=, ==, !=, ===, !==, ||, && /////////////////////

// const TotalMarks = 121
// if (TotalMarks >= 1 && TotalMarks < 33) {
//     const Result = "Fail"
//     console.log(`Candidate are ${Result}`);
// }
// else if (TotalMarks >= 33 && TotalMarks <= 100) {
//     const Result = "Pass"
//     console.log(`Candidate are ${Result}`);
// }
// else {
//     const Result = "Unvalid"
//     console.log(`${Result} Result`);
// }

const LoggedInFromGoogle = true
const LoggedInFromEmail = false

if (LoggedInFromGoogle || LoggedInFromEmail) {  // Any one true than Executed
    console.log(`User Logged In Successfully`);
}

                                    // Nullish Coalescing Operator (??) : null & undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 10 ?? 25
// val1 = 10 ?? "Jay"
// val1 = undefined ?? 15
// val1 = "Goku" ?? null
// val1 = undefined ?? null  // ans null
// val1 = null ?? undefined  // ans undefined

console.log(val1);

                                    // Terniary Operator (?) : check condition like if else
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : 
console.log("Less than 80")