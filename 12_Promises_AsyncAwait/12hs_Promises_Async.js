//* A Promise is an Object that links PRODUCING CODE( is code that can take some time) and CONSUMING CODE (is code that must wait for the result) ...


console.log("Start")
const kitchen = ["coffee", "vegetables", "rice", "salt"]

const friedPromise = new Promise((resolve, reject) => {
    //* PRODUCING CODE
    if (kitchen.includes("vegetables") && kitchen.includes("rice") && kitchen.includes("salt")) {
        resolve({Value:"Fried Rice"})
    } else {
        reject("NotDone")
    }
});

//* CONSUMING CODE ---> using 'then' method, 'then' method can takes 2 callback fns as a input

friedPromise.then((myrice) => {
    console.log("Let's eat", myrice)
},
    (error) => {
        console.log(error)
    })

setTimeout(() => {
    console.log("Hello from SetTimeout");
}, 0);

for (let i = 0; i<10; i++){
    console.log(Math.random(),i)
}

console.log("End")

//? ================ OR =====================

// friedPromise.then((myrice) => {
//     console.log("Let's eat", myrice)
// })
//     .catch((error) => {
//         console.log(error);
//     })


