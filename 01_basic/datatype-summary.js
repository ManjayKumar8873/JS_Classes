// primitive 

// 7 types = String, number, boolean, Null, Undefined, Symbol, bigint

const score = 100;
const scoreValue = 100.3
const isloggedIn = false 
const outsideTemp = null
let userEmail;
 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


//const bigNumber = 293835241325242626n

// reference (Non Primitive )

// Array, Objects, functions

/********* array *************** */

const Heros = ["Shakitan", "Nagraj", "Fighterman"]

/************* Objects ************** */

let myObj ={
    name: "Manjay",
    age: 24
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof Heros);


// https://262.ecma-international.org/5.1/#sec-11.4.3   
