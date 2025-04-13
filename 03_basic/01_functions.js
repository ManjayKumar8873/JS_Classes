function sayMyName () {
    console.log("M");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("y");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3, 4)

//  +++++++OR ++++++++++++

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

     return number1 + number2
}
const result = addTwoNumbers(3, 4)
console.log("Result: ", result);


function userlogin(username){
    // if(username === undefined){
    //     console.log("Please Enter a Username: ");
    //     return
    // }
    // +++++ OR +++++++++
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}
console.log(userlogin());

// ///////////////////

//  Restoperator(...)
function calculateCartPrice(...num1){
                        // (val1, val2, ...num1)   output => [500, 100]
    return num1  
}
console.log(calculateCartPrice(200, 300, 500, 100));

// ////////////////////

 const user = {
    username: "Manjay",
    price: 199
 }
 function handleObject(anyObject){
    console.log(`User is ${anyObject.username} and Price is : ${anyObject.price}`);
    
 }

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

// /////////////

const myArray = [200, 500, 400, 100]

function returnSecondArray(getArray){
    return getArray[1]
}

console.log(returnSecondArray(myArray));

console.log(returnSecondArray([100, 200, 300, 400]));



// +++++++++++ Scope (function scope) ++++++++++

