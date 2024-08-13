//* A Promise is an Object that links PRODUCING CODE( is code that can take some time) and CONSUMING CODE (is code that must wait for the result) ...

const kitchen = ["coffee", "vegetables", "rice", "salt"]

const friedPromise = new Promise((resolve, reject)=>{
    //* PRODUCING CODE
    if(kitchen.includes("vegetables") && kitchen.includes("rice") && kitchen.includes("salt")){
        resolve("Frird Rice")
    }else{
        reject("NotDone")
    }
});

    //* CONSUMING CODE ---> using 'then' method, 'then' method takes the callback fns as a input
friedPromise.then((myrice)=>{
    console.log("Let's eat", myrice)
})