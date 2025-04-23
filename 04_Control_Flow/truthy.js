// const userEmail = "mk@gmail.com"

// const userEmail = []

// if (userEmail) {
//     console.log("Got user mail");
// } else {
//     console.log("user email not foud");
// }

//  falsy values 

// false, 0, -0, 0n, "", BigInt, null, undefined, NaN

// truthy values

//  "0", 'flase', " ", [], {}, function(){}


//  Nullish coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 25 ?? 30

console.log(val1);

// ++++++++++++++++++++++++++++++++++++++

// Terniary Operator

// Condition ? true : false

const icePrice =100

icePrice >= 80 ? console.log("More than 80") : console.log("less than 80");



