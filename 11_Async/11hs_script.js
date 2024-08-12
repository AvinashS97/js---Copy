//? JavaScript is the Synchronous programming as it execute in the way we call i.e., in synchronous way and it is single threaded language... 

// function myFirst() {
//   console.log("Hello");
// }

// function mySecond() {
//   console.log("Goodbye");
// }

// myFirst();
// mySecond();
// console.log("Sync programming ---> it will execute after the above execution");

//* The above is the example of sync programming...
//! Asynchronous Programming

//* setTimeout function ---> It take 2 argument ===> a callback fns and a time after which the fns will execute... It give id in return...
//* setTimeout executes the code only once after the specified delay...


// console.log("setTimeout start");

// const id = setTimeout(()=>{
//   console.log("In setTimeout fns") 
// }, 1000);

// for(let i=1; i<5; i++){
//   console.log("loop")
// }
// console.log("setTimeout",id);
// console.log("Clearnig timeOut");
// clearTimeout(id);
// console.log("setTimeout Ends");
// 22:00


//* setInterval ===> setInterval executes the code repeatedly at the specified interval.

// console.log("setinterval start");
// setInterval(() => {
//   console.log(Math.random());
// }, 1000);
// console.log("setInterval Ends");

const body = document.body;
const button= document.querySelector("button")

const intervalId = setInterval(() => {
  const red = Math.floor(Math.random()*126);
  const green = Math.floor(Math.random()*126);
  const blue = Math.floor(Math.random()*126);
  const rgbColor =` rgb(${red}, ${green}, ${blue})`;
  body.style.background=rgbColor;
}, 1000);


button.addEventListener("click",()=>{
  clearInterval(intervalId);
  button.textContent = body.style.background;
})