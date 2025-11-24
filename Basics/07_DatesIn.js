let myDate = new Date()
console.log(myDate.toString());            // Mon Nov 24 2025 12:33:05 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());        // Mon Nov 24 2025
console.log(myDate.toJSON());              // 2025-11-24T07:03:05.162Z
console.log(myDate.toLocaleString());      // 24/11/2025, 12:33:05
console.log(myDate.toLocaleDateString());  // 24/11/2025
console.log(myDate.toLocaleTimeString());  // 12:33:05
console.log(typeof myDate);                // object
console.log(Date.now);  // Current Date


let myCreatedDate = new Date("01-14-2025") // first three is date and last three is time
console.log(myCreatedDate.toLocaleString());  // 14/01/2025, 00:00:00

let myCreatedTime = Date.now()
console.log(myCreatedTime);  // MSecound Value 1763967954717
console.log(myCreatedDate.getTime()); // convert date value into milli secound
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());  // 24
console.log(newDate.getMonth() + 1); // 11  default date start with 0-January
console.log(newDate.getDay());  // 1

// String interpolation Example
console.log(`Date is ${newDate.getDate()} and the time is ${newDate.getTime()}`); 

newDate.toLocaleString('default', {
    weekday: "long",
})