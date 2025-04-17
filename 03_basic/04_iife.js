// Immediately invoed function Expressions (IIFE)

// function Hello (){
//     console.log(`DB CONNECTED`);
// }
// Hello()

// ++++++++++ OR +++++++++

(function Hello (){
    console.log(`DB CONNECTED`);
})();

( () =>{
    console.log(`DB CONNECTED TWO`);
    
})();

// +++++++ OR +++++++++

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Manjay")