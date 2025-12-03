// Falsey value
// false, 0, -0, bigint 0n, "", null, undefiend, NaN

// Truthy value
// true, "0", 'false', " ", [], {}, function(){}

const userEmail = "" // Falsey  " "  // Truthy

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");   
}

if (userEmail.length === 0) {
    console.log("Array is Empty");   
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {  // Return Array
    console.log("Object is Empty");
}