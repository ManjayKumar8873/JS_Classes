// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Anil", "Nagraj", "Shaktiman"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1]);


// Array methods

myArr.push(6) //add last value
myArr.push(7)
myArr.pop() //remove last value
myArr.unshift(9) // insert start array
myArr.shift() // remove the  start index array

console.log(myArr.includes(9)); // ask the include value(true/flase)

console.log(myArr.indexOf(3)); //ask the index 

const newarr = myArr.join()
console.log(myArr); 
console.log(newarr); // bind array and convert to string
console.log(typeof newarr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);

