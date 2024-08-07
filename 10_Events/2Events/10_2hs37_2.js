//? Event Object ===> Event object is a object created by the browser when user perform some action , which holds all information about type of event occured and the element on which the event occurred.
//? 2. Event object is passed to respective event handler , every time event occured.
//? 3. So, we can access event object in callback function.
//** ===================== */ ================== 

//? Events ---> Actions performed by user on browser are refered as events. Events are things that happen in the system when you are programming like the system produces (or "fires") a signal of some kind when an event occurs...
//? Whenever event occurs browser creats an object which contains all information about the event and object on which event occured.

//? Event listeners ===> are functions that wait for a specific event to occur and then execute js code (callbacks) assigned to it.
//? We can attach event listeners by three ways...

//? Events Type
//* Keyboard Event ---> keydown, keyup, keypress
//* Mouse Event ---> Mouse click, dbl click, mousedown, mouseup, mousemove
//* Form Event ---> submit, reset, change 

//? ===================================================

console.log("for 10_2hs_index.html")//! *************

const btn = document.querySelector(".btn-headline");

// console.log(btn);
// btn.onclick =function(){
//   console.log("you clicked me !!!")}

// function clickMe() {
//   console.log("you clicked me... !!!")
// }

// btn.addEventListener('click', function () {
//   console.log("you clicked me !!!")
//   console.log(this); // <button class="btn btn-headline">Learn More</button>
// });



console.log("for button-1,2,3") //! ********

// console.log("btn")
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
// console.log("clicked btn one")
// })

//*loop

// const allButton = document.querySelectorAll(".my-buttons button");

// for(let button of allButton){
//   button.addEventListener("click", function(){
//     console.log(this);
//     console.log(this.textContent);
//     console.log("clicked btn ");
//   })
// }

//* OR

// for (i=0; i<allButton.length; i++){
//   allButton[i].addEventListener("click",function(){
//     console.log("btn with for Loop");
//     console.log(this);
//   })
// }

//* OR

// allButton.forEach(function(button){
//   button.addEventListener("click",function(){
//     console.log("btn with forEach");
//     console.log(this);
//   });
// });

//* Event Object ( 28:00 min )

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function (e) {
//   console.log(e); // On performing any events js engine will provide all info. in Object form by using arguments like 'e' relate to it...
//   console.log("clicked btn one"); 
//   console.log(this);
// })

// for(let button of allButton){
//   button.addEventListener("click", function(e){
// console.log(e.currentTarget);
// console.log(this.textContent);
// console.log("clicked btn ");
//   })
// }

const allButton = document.querySelectorAll(".my-buttons button");

// allButton.forEach(function(button){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget.textContent);
// console.log("btn with forEach");
// console.log(this);
// });
// });

allButton.forEach(function (button) {
    button.addEventListener("click", (e) => {
        console.log(e.currentTarget);
        e.target.style.backgroundColor = "yellow";
        // e.target.style.color="black";
    });
});

//* Keypress Event

const body = document.body;
body.addEventListener("keypress", (e) => {
    console.log(e); //* Give the pressed key 
    console.log(e.key);
})

//* Mouseover / Mouseleave Event (01:18:00)

const learnMoreButton = document.querySelector(".btn-headline");
// console.log(learnMoreButton)
learnMoreButton.addEventListener("mouseover", (e) => {
    // console.log(e)
    console.log("mouse Over event occured...")
})
learnMoreButton.addEventListener("mouseleave", (e) => {
    // console.log(e)
    console.log("mouse leave event occured...")
})  
