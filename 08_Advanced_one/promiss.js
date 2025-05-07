const promiseOne = new Promise(function(resolve, reject){
    //  Do an async task
    //  DB call, cryptography, network

    setTimeout(function(){
        console.log(`Async task is completed`);
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log(`Promise is consumed`);
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async task 2`);
        resolve()
    })
},2000).then(function(){
    console.log(`promise two is resolved`);
    
})

// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName: 'Manjay', email: 'manjay@gmail.com'})
//     },1000)
// })

// promiseTwo.then(function(user){
//     console.log(user );
// })


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: 'Ranjay', email: 'ranjay@gmail.com'})
        } else{
            reject('Error: Somthing is wrong')
        }
    },1000)
})

promiseThree
.then((user)=>{
    console.log(user);
    return user.userName
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected");
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName: 'JavaScript', Passward: 1234})
        } else {
            reject('Error: JS is Wrong')
        }
    },1000)
})

async function promiseFourConsumer(){
    try {
        const response = await promiseFour
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
promiseFourConsumer()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         log("E :", error)
//     }
// }
//  getAllUsers()


//  ++++++++++++ OR +++++++++++++

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})