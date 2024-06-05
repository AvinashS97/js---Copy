// Events are things that happen in the system you are programming — the system produces (or "fires") a signal of some kind when an event occurs,
// For example:
// The user selects, clicks, or hovers the cursor over a certain element.
// The user chooses a key on the keyboard.
// type, timestamp, dafaultPrevented
// target, toelement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode 

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

// document.getElementById("ballons").addEventListener('click', function(e){
//   alert("ballons clicket")
// })

document.getElementById("images").addEventListener('click', function(e){
  console.log("Clicked inside ul list")
},true)

document.getElementById("ballons").addEventListener('click', function(e){
  console.log("ballons clicket")
  e.stopPropagation()
}, true)

document.getElementById('google').addEventListener('click', function(e){
  e.preventDefault()
  e.stopPropagation()
  console.log("google clicked")
})


