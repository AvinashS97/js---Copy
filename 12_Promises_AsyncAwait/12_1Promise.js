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
//             reject('ERROR: Something went wrong')
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

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "JavaScript", password: "456678"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     },1000)
// })

//* We can also handle promise with async & await rather than .than or .catch

// async function consumePromiseFive() {
//     // const Response = await promiseFive;
//     // console.log(Response); // async await can't handle error directly... so we use try & catch...

//     try{
//         const Response = await promiseFive;
//     console.log(Response);
//     } catch (error) {
//         console.log(error); 
//     }
// }
// consumePromiseFive();


//! API REQUEST

//** We have 3 most common ways to create and send request to server */
//**i) xml HttpRequest(old ways) */ 
//**ii) fetch API (new ways) */ 
//**iii) axios (A third party library) */ 

//** i) XML HttpRequest */
    /* Properties:- 
     * XHR.readyState ,XHR.response, XHR.responseType, .upload, .channel, .satus, .statusText ...  
    */


// const url = 'https://api.github.com/users/AvinashS97'
// const xhr = new XMLHttpRequest();
// xhr.open('GET',url)
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState); // gives continuous changes in state value
//     if(xhr.readyState === 4){
//         const data = JSON.parse(this.responseText); // it will change to the coming data into json format so thst we can access them later... 
//         console.log(data.login);
//     }
// }
// xhr.send();  
// // console.log(xhr.readyState); //gives state value

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

// const url = 'https://api.github.com/users/hiteshchoudhary';

const getData = ()=>{
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.github.com/users/hiteshchoudhary');

    xhr.onload= ()=>{
        const data = JSON.parse(xhr.response);
        console.log(data)
    }
    xhr.send();
}

const sendData = ()=>{}

getBtn.addEventListener('click',getData)
postBtn.addEventListener('click',sendData)

// 06:36

























//! Now we Know about fetch...

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//        console.log("E: ",error);    
//     }
// }
// getAllUsers();

//!OR

// fetch ('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error);})

//! Working of fetch API:
/* The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available... */ 

// fetch('https://api.github.com/users/AvinashS97')
// .then(Response=>{
//     return Response.json();
// })
// .then((data)=>{
//     console.log(data.avatar_url)
// })
// .catch((error)=>{
//     console.log(error);
// })