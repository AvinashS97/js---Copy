//! Event Bubling or Event Propagation
//! Event Capturing
//! Event Delegation

console.log("Hello")

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//** Event Bubling or Event Propagation */

child.addEventListener("click", ()=>{
    console.log("You Clicked Child")
})
parent.addEventListener("click", ()=>{
    console.log("You Clicked Parent")
})
grandparent.addEventListener("click", ()=>{
    console.log("You Clicked Grandparent")
})
document.body.addEventListener("click", ()=>{
    console.log("You clicked Body")
})

//** Capturing Event */ (=== 01:33:10 ===)

child.addEventListener("click", () => {
    console.log("Captured !!! Child")
}, false)
parent.addEventListener("click", () => {
    console.log("Captured !!! Parent")
}, false)
grandparent.addEventListener("click", () => {
    console.log("Captured !!! Grandparent")
}, false)
document.body.addEventListener("click", () => {
    console.log("Captured !!! Body")
}, false)