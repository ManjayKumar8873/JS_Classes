 // const tinderUser = new Objects() // singleton object

 const tinderUser = {}  // Non singleton object

  tinderUser.id = "123abc"
  tinderUser.name = "Shyam"
  tinderUser.isLoggedIn = false

  console.log(tinderUser);
  
const regularUser = {
    email: "manjay@gmail.com",
    Fullname: {
        userfullname: {
            firstname: "Manjay",
            lastname: "Kumar "
        }
    }
}

//console.log(regularUser.Fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "B"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign(obj1, obj2)
//++++++ Or
//const obj3 = Object.assign({}, obj1, obj2)
//++++++ OR
const obj3 = {...obj1, ...obj2}

console.log(obj3);

const users  = [
    {
        id: 1,
        email: "Manjay@gmail.com"
    },
    {
        id: 2,
        email: "gkp@gmail.com"
    },

    {
       id: 3,
       email: "raja@gmail.com" 
    }
]

 users[1].email 

 console.log(tinderUser);
 
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty("isLoggedIn"));
 
 