// +++++++++ Local and Global Scope +++++++++

//  var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    console.log("inner:", a);
}

console.log(a);
// console.log(b);
// console.log(c);

// +++++++++++ Nested Scope +++++++++++++

function one(){
    const username = "Manjay"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}
one()

// /////////////////////////////

if(true){
    const username = "Prajapati"

    if(username === " Prajapati"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website); X
    
}
// console.log(username); X 


// +++++++++++ intresting +++++++++++


console.log(addone(5));

function addone(num1){
    return num1 + 1
}

// addtwo(5) X
const addtwo = function(num1){
    return num1 + 2
}
console.log(addtwo(5));

