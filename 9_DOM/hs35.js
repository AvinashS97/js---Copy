//DOM ---> Documnet Object Module
//THe HTML DOM is a standard for how to get, change,add, or delete HTML elements.
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
// HTML ko JavaScript ke andr access krne ka tarika DOM kehlata hai.

// console.dir(document.body);
// console.log(window.document);
// console.dir(document);

//Finding HTML Objectss
console.log(document.links);// to get all <area> or <a> that have href attribute.
console.log(document.body); // return the <body> element.
console.log(document.URL); //returns the complete URL of the document



// Select element using getElementById...

// console.log(document.getElementById("main-heading")); // it return objects.
// console.dir(document.getElementById("main-heading")); // it return objects.

//select element using query selector
// console.log(document.querySelector("#main-heading")); // it return objects. 

//Change Text (DOM MANIPULATION)
const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);
document.getElementById("main-heading");
document.getElementById("main-heading").innerHTML = "<h1> All Task </h1>"
