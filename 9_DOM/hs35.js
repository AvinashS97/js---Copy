//DOM ---> Documnet Object Module
//THe HTML DOM is a standard for how to get, change,add, or delete HTML elements.
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
// HTML ko JavaScript ke andr access krne ka tarika DOM kehlata hai.

// console.dir(document.body);
// console.log(window.document);
// console.dir(document);

// Finding HTML Objects
console.log(document.links);// to get all <area> or <a> that have href attribute.
console.log(document.body); // return the <body> element.
console.log(document.URL); //returns the complete URL of the document

// Select element using getElementById...

console.log(document.getElementById("main-heading")); // it return objects.
console.dir(document.getElementById("main-heading")); // it return objects.

//Change Text (DOM MANIPULATION)

// document.getElementById("main-heading");
const heading = document.getElementById("main-heading");
heading.style.backgroundColor = "green"
heading.style.padding = "15px"
heading.style.borderRadius = "10px"

heading.textcontent //'Manage Your Task Test'
heading.innerText   //'Manage Your Task'
heading.innerHTML   //'Manage Your Task <span style="display: none;">Test</span>'

document.getElementById("main-heading").innerHTML = "<h1> All Task </h1>"

// document.getElementById("main-heading").className // give className

document.getElementsByClassName("heading2")

document.getElementById("main-heading").getAttribute("id") // get attribute
document.getElementById("main-heading").setAttribute("class", "heading2") // setting the class/id attribute name.