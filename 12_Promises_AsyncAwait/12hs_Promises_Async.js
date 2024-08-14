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

// =======================================================
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

//! Promise && setTimeout()
//* resolve / reject a promise after 2 seconds...

function newPromise(){
    return new Promise((resolve, reject)=>{
        const Value= false;
        setTimeout(() => {
            if(Value){
                resolve();
            }else{
                reject();
            }
        }, 2000);
    })
}

newPromise().then(()=>{console.log("Resolved")})
            .catch(()=>{console.log("Rejected");})


