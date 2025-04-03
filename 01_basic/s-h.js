// Stack (Primitive), Heap (Non primitive)

let myName="ManjayPrajapati"
let anotherName = myName
anotherName = "Prajapati"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "mkkk@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "manjay@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
