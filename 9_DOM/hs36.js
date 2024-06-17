//select element using query selector

// console.log(document.querySelector("#main-heading")); // it return objects.
document.querySelector("h1"); //<h1 class=​"logo">​DOM Website​</h1>​
document.querySelector("input[type=password]"); //document.querySelector("input[type="password"]")

const list = document.querySelectorAll("li")

list[0].style.color = "green"

list.forEach(function (l) {
    l.style.backgroundColor = "grey"
})

//Add/remove class to element with classlist
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
sectionTodo.classList.add("bg-dark")
sectionTodo.classList.remove("bg-dark")

const ans = sectionTodo.classList.contains("bg-dark");
console.log(ans)

sectionTodo.classList.toggle("bg-dark");//it add the class if there is no class and removes it if there is a class.

// select element using className

// document.getElementById("main-heading").className // give className
document.getElementById("main-heading").getAttribute("id") // get attribute
document.getElementById("main-heading").setAttribute("class", "heading2") // setting the class/id attribute name.
document.getElementsByClassName("heading2")

//How to apply loop on HTMLCollection
const navList = document.getElementsByClassName("nav-list")
const myArray = Array.from(navList)
myArray // [li.nav-list, li.nav-list, li.nav-list]

//applying loops
myArray.forEach(function (li) {
    li.style.color = "orange"
})


