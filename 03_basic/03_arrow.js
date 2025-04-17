
// const user = {
//     username: "Manjay",
//     Price: 999,

//     welcomeMassage: function(){
//         console.log(`${this.username} welcome to website`);
//         // console.log(this);
        
//     }
// }

// user.welcomeMassage()
// user.username = "Prajapati"
// user.welcomeMassage()

// console.log(this); 

// ////////////////////////////

// function hello (){
//     const username = "Manjay"
//     console.log(this.username);
// }
// +++++++++++++++++++++
// const hello = function(){
//     const username = "Manjay"
//     console.log(this.username);
// }

// ++++++++++++++++++++++++++++++
// const hello = ()=>{
//     const username = "Manjay"
//     console.log(this.username);
// }
// hello()

// ///////////////////////////

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(6, 4));

// ++++++++ OR (implicits) +++++++++++

// const addTwo = (num1, num2) => num1 + num2

//          OR

// const addTwo = (num1, num2) => (num1 + num2)

//              OR

const addTwo = (num1, num2) => ({username: "Manjay"})


console.log(addTwo(5, 7)); 
