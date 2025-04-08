 let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreateDate = new Date(2025, 0, 16)
//console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(205, 0, 16, 5, 30)
// console.log(myCreateDate.toLocaleDateString());

let myCreateDate = new Date("01-16-2024")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());

newDate.toLocaleString('default', {
    weekday: "long"
})

