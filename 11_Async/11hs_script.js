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

//? setTimeout function ---> It take 2 argument ===> a callback fns and a time after which the fns will execute...

console.log("setTimeout start");

setTimeout(()=>{
  console.log("In setTimeout fns") 
}, 1000);
console.log("setTimeout Ends");

