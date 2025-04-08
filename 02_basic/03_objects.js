// singletone

// objects literals

const mySym = Symbol("mySyme1 ")

const JsUser = {
    Name: "Manjay",
    "full name": "Manjay Kumar",
    [mySym]: "mySym1",
    Age: 24,
    Location: "Bihar",
    Email: "manjay@gmail.com",
    isLoggedIn: false,
    lastLogindays : ["Monday", "Saturday"]
}

console.log(JsUser.Email);
console.log(JsUser["Email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.Email = "manjay@gmail.com "
//Object.freeze(JsUser)

JsUser.Email = "manjay@microsoft.com"

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(JsUser.greeting());


JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.Name}`);
    
}

console.log(JsUser.greetingtwo());
