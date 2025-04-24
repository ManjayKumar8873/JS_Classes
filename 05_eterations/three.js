// for of 

const arr = [1, 2, 3, 4, 5, 6]

for (const value of arr) {
    console.log(`value is ${value}`);
}


const greeting = "Hello World"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
}

const map = new Map()

map.set('IND', "India")
map.set('USA', "United State of America")
map.set('Fr', "france")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}
