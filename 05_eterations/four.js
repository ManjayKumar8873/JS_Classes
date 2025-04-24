// for in loop

const myObject = {
    Js: "JavaScript",
    Cpp: "C++",
    Rb: "Ruby",
    Java: "JAva Language"
}

for (const key in myObject) {
    console.log(`${key} Shortcut is for ${myObject[key]}`);
    
}


const Programming = ["Js", "py", "rb", "Java", "cpp"]

for (const key in Programming) {
    console.log(Programming[key]);
    
}