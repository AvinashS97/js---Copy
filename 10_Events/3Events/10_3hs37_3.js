//! Event Bubling or Event Propagation
//! Event Capturing
//! Event Delegation

console.log("Hello")

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//** Event Bubling or Event Propagation */

//** Capturing Event */

// child.addEventListener("click", () => {
//     console.log("Captured !.. Child")
// }, false)
// parent.addEventListener("click", () => {
//     console.log("Captured !.. Parent")
// }, true)
// grandparent.addEventListener("click", () => {
//     console.log("Captured !.. Grandparent")
// }, true)
// document.body.addEventListener("click", () => {
//     console.log("Captured !.. Body")
// }, true)

//** Event Bubbling */ (=== 01:33:10 ===)

// child.addEventListener("click", ()=>{
//     console.log("You Clicked Child")
// })
// parent.addEventListener("click", ()=>{
//     console.log("You Clicked Parent")
// })
// grandparent.addEventListener("click", ()=>{
//     console.log("You Clicked Grandparent")
// },false)
// document.body.addEventListener("click", ()=>{
//     console.log("You clicked Body")
// })

//** Event Delegation */

grandparent.addEventListener("click", (e) => {
    console.log("Delegation on Grandparent")
    console.log(e.target);
    console.log(e.target.textContent);
})