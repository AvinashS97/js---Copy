//* Promise are used to handle async operations in JavaScript...
//* Promise is likean Emp ty object data value in it...
//* A Promise is an Object that links PRODUCING CODE( is code that can take some time) and CONSUMING CODE (is code that must wait for the result) ...


// console.log("Start")
// const kitchen = ["coffee", "vegetables", "rice", "salt"]

// const friedPromise = new Promise((resolve, reject) => {
//     //* PRODUCING CODE
//     if (kitchen.includes("vegetables") && kitchen.includes("rice") && kitchen.includes("salt")) {
//         resolve({ Value: "Fried Rice" })
//     } else { 
//         reject("NotDone")
//     }
// });

//* CONSUMING CODE ---> using 'then' method, 'then' method can takes 2 callback fns as a input
//* then method always returns Promise
//* .then can be applied only on fns...

// friedPromise.then((myrice) => {
//     console.log("Let's eat", myrice)
// },
//     (error) => {
//         console.log(error)
//     })

// setTimeout(() => {
//     console.log("Hello from SetTimeout");
// }, 0);

// for (let i = 0; i < 10; i++) {
//     console.log(Math.random(), i)
// }

// console.log("End")

// //? ================ OR =====================

// friedPromise.then((myrice) => {
//     console.log("Let's eat", myrice)
// })
//     .catch((error) => {
//         console.log(error);
//     })

//* =======================================================
//! Function Returning Promise

// function teaPromise(){
//     const bucket = ["sugar", "tea", "water", "milk"];
//     return new Promise ((resolve, reject)=>{
//         if(bucket.includes("sugar") && bucket.includes("tea") && bucket.includes("water") && bucket.includes("milk")){
//             resolve({Value: "Tea"})
//         }else{
//             reject("ould not complete...")
//         }
//     })
// }

// teaPromise().then(
//     (myTea)=>{
//         console.log("let's drink",myTea);
//     }
// ).catch(
//     (error)=>{
//         console.log(error)
//     }
// )

//* =======================================================
// //! Promise && setTimeout()
// //* resolve / reject a promise after 2 seconds...

// function newPromise(){
//     return new Promise((resolve, reject)=>{
//         const Value= false;
//         setTimeout(() => {
//             if(Value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 2000);
//     })
// }

// newPromise().then(()=>{console.log("Resolved")})
//             .catch(()=>{console.log("Rejected");})


//* =======================================================

//! Promise Resolve ---> resolve return Promise...
//      Ex:-
// Promise.resolve(5).then(Value=>{
//     console.log(Value);
// })

// const heading1 = document.querySelector(".heading-1")
// const heading2 = document.querySelector(".heading-2")
// const heading3 = document.querySelector(".heading-3")
// const heading4 = document.querySelector(".heading-4")
// const heading5 = document.querySelector(".heading-5")
// const heading6 = document.querySelector(".heading-6")
// const heading7 = document.querySelector(".heading-7")

// function changeText(element, text, color, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (element) {
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             } else { // if element does not exist than else block will be executed...
//                 reject("Element Not Found");
//             }
//         }, time)
//     })
// }

//* ===== Promise Chaining =====
// changeText(heading1, "One", "red", 1000)
//     .then(() => changeText(heading2, "Two", "purple", 1000))
//     .then(() => changeText(heading3, "Three", "Violet", 1000))
//     .then(() => changeText(heading4, "Four", "Magenta", 1000))
//     .then(() => changeText(heading5, "Five", "Blue", 1000))
//     .then(() => changeText(heading6, "Six", "Green", 1000))
//     .then(() => changeText(heading7, "Seven", "Orange", 1000))
    // .catch((error) => { alert(error) })

//* =====================================================
//! AJAX ---> Asynchronous JvaScript And XML...
//** It is a set of "web development techniques" */
//** Using many web technologies on the client-side... */
//** to create asynchronous web applications...*/

//** AJAX can send and retrieve data from a server asynchronously (in the background) without interfering with the display abd behaviour of the existing page... */

//** We have 3 most common ways to create and send request to server */
//**i) xml HttpRequest(old ways) */ 
//**ii) fetch API (new ways) */ 
//**iii) axios (A third party library) */ 


//* ====================================================================

//? XHR(XML Http Request)

//* How to use API---
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
console.log(xhr.readyState); // 0 (Unsent)

//*step-1 ---> Use open method

xhr.open("GET", URL);

// console.log(xhr.readyState); // 1 (Sent)
// xhr.onreadystatechange = function(){
//     // console.log(xhr);
//     console.log(xhr.readyState); // 
// }
// xhr.send();

//! OR

xhr.onload = function(){
    console.log(xhr.readyState) // Runs when operation is completed...  
    // const response = xhr.response;
    // const data = JSON.parse(response);
    // console.log(data);
}
xhr.send();

//! XMLHttpRequest.ReadyState---> It return the state an XMLHttpRequest client is in XHR client exist in the resultant state...

// 01:30:00