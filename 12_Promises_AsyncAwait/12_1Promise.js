//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/* A Promise is in 3 states
    * Pending
    * Fulfilled
    * Rejected
*/

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task-1");
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Async-1 Consumed");
// })

//!OR

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async task-2");
//         resolve();
//     }, 2200);
// }).then(function(){
//     console.log("Async-2 Resolved");
// })

//!

// const promiseThree= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({Username:"Chai", email:"chai@example.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

//!

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username:"Avinash", password: "123890"})
//         }else{
//             reject('ERROR: Something gets Wrong')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username); // access perticular info...
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=>{ console.log("The promise is either reject or resolve")})

//!OR

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript", password: "456678"})
        } else {
            reject('ERROR: Something gets Wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    const Response = await promiseFive;
    console.log(Response);
}

consumePromiseFive();