const mainbutton = document.querySelector("button");
const body = document.body;
const currentcolor = document.querySelector(".current-color")
// console.log(currentcolor)

function random() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rndCol = `rgb(${red}, ${green}, ${blue})`
    return rndCol
}
//* math.random() help to generate  random number for colors...

mainbutton.addEventListener("click", () => {
    // console.log("button clicked")
    const rndCol = random();
    // console.log(rndCol)
    body.style.backgroundColor = rndCol;
    currentcolor.textContent = rndCol //* set the value of rndcol = currentcolor text content... 
});