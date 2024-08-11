//? JavaScript is the Synchronous programming as it execute in the way we call i.e., in synchronous way and it is single threaded language... 

function myFirst() {
  console.log("Hello");
}

function mySecond() {
  console.log("Goodbye");
}

myFirst();
mySecond();
console.log("Sync programming ---> it will execute after the above execution");

//* The above is the example of sync programming...
//! Asynchronous Programming
//? setTimeout function ---> It take 2 argument ===> a callback fns and a time after which the fns will execute... It give id in return...

console.log("setTimeout start");

const id = setTimeout(()=>{
  console.log("In setTimeout fns") 
}, 1000);

for(let i=1; i<5; i++){
  console.log("loop")
}
console.log("setTimeout",id);
console.log("setTimeout Ends");


