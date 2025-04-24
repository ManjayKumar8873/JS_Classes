// const coding = ["js", "ruby", "java", "python",]

// // coding.forEach(function(value){
// //     console.log(value);
// // })

// //  +++++++++ OR +++++++++++

// // coding.forEach( (item) => {
// //     console.log(item);
// // })

// //  ++++++++++++++ OR +++++++++

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "Java",
        languageFileName: "Java"
    },

    {
        languageName: "JavaScript",
        languageFileName: "js"
    },

    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})