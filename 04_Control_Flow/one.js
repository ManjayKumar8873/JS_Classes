//  If Statement +++++++++++

const isUserLoggedIn = true

const Tempreture = 41

// if(Tempreture < 50){
//     console.log("Temprature less than 50");
// }else {
//     console.log("Temprature Grater than 50");
// }

// console.log("excuted");

//  <, >, <=, >=, ==, !=, ===, !==

//  +++ Short notetion (emplicites scope) ++++++++

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); not prafect write

//  if (balance < 500) {
//     console.log("less than 500");
    
//  } else if (balance < 750) {
//     console.log("less than 750");
    
//  } else if (balance < 900) {
//     console.log("less rhen 900");
    
//  } else {
//     console.log("less then 1200");
    
//  }


const UserLoggedIn = true
const debitcard = true
const loggedInFormgoogle =false
const loggedInFormEmail = true

if (UserLoggedIn && debitcard) {
    console.log("Allow to buy coursea");
    
}

if (loggedInFormgoogle || loggedInFormEmail) {
    console.log("User logged in");
    
}