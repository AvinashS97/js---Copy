//DOM Events
//Event Object

// Events ---> are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs,

// For example:
// The user selects, clicks, or hovers the cursor over a certain element.
// The user chooses a key on the keyboard.
// type, timestamp, dafaultPrevented
// target, toelement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode 

// const btn = document.querySelector("button");

// 1.Random Number Generator

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// 2.Background Changer

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

// 3. Apply perticular action on different elements

// document.getElementById("ballons").addEventListener('click', function(e){
//   alert("ballons clicket")
// })

// document.getElementById("images").addEventListener('click', function(e){
//   console.log("Clicked inside ul list")
// },false)

// document.getElementById("ballons").addEventListener('click', function(e){
//   console.log("ballons clicket")
//   e.stopPropagation() // stop bubbling propagation 
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
// e.preventDefault() //prevent there default behaviour
// e.stopPropagation()
//   console.log("google clicked")
// }, false)

// task: to remove all the images present on the web page

// document.querySelector('#images').addEventListener('click', function(e){
//   console.log(e.target.parentNode);
//   if(e.target.tagName === 'IMG'){
//     console.log(e.target.id)
//     let removeIt = e.target.parentNode
//     removeIt.remove()
//     // removeIt.parentNode.removeChild(removeIt) //2nd way
//   }
// })

const btn = document.querySelector(".btn-headline"); //for hs_10-index.html
console.log(btn);
// btn.onclick =function(){
//   console.log("you clicked me !!!")}

// function clickMe() {
//   console.log("you clicked me !!!")
// }

// btn.addEventListener('click', function () {
//   console.log("you clicked me !!!")
//   console.log(this);
// });

// console.log("btn")
const firstButton = document.querySelector("#one");
firstButton.addEventListener("click", function(){
  // console.log("clicked btn one")
})

//loop
const allButton = document.querySelectorAll(".my-buttons button");

// for(let button of allButton){
//   button.addEventListener("click", function(){
//     console.log(this);
//     console.log(this.textContent);
//     console.log("clicked btn ");
//   })
// }

//OR

// for (i=0; i<allButton.length; i++){
//   allButton[i].addEventListener("click",function(){
//     console.log("btn with for Loop");
//     console.log(this);
//   })
// }

//OR

// allButton.forEach(function(button){
//   button.addEventListener("click",function(){
//     console.log("btn with forEach");
//     console.log(this);
//   });
// });

//Event Object ( 28:00 min )
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function () {
//   console.log("clicked btn one")
// })
