//let score = "33"
// let score = null
// let score = undefined
// let score = true
// let score = false
// let score = "Manjay"

let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = "manjay"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Manjay" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


// ********************** Operations ****************************


let value = 3

let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello"
let str2 = " Manjay"
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let gamecounter = 100
gamecounter++;

console.log(gamecounter);

// link to study
// https://tc39.es/ecma262/#sec-type-conversion







