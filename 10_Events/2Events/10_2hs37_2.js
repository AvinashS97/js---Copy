//! Event Object
//* Events ---> are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs,

//* Keypress Event
//* Mouseover Event
//* Mouseleave Event

console.log("for 10_2hs_index.html")// *************

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



console.log("for button-1,2,3") //********

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
    console.log(e.key);
})

//* Mouseover Event

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
