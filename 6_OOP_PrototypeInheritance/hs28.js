//! METHODS
//! FUNCTION INSIDE OBJECT
//! THIS KEYWORD
//! WINDOW OBJECT

//! THIS KEYWORD ---> It refers to an Object, you can't change th evalue of 'this'.

// const person ={
//     firstName: "Mohit",
//     age: 18,
//     about: function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`); 
//         console.log(this);
//     }
// }
// person.about()

function info() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Rohit",
    age: 18,
    about: info
}

const person2 = {
    firstName: "Avinash",
    age: 20,
    about: info
}

const person3 = {
    firstName: "Sumit",
    age: 22,
    about: info
}
// console.log(info); //print only info fns
// person1.about();   //person name is Rohit and age is 18
// person2.about();   //person name is Avinash and age is 20
// person3.about();   //person name is Sumit and age is 22

//! WINDOW OBJECT---> The window object represents an open window in a browser. It is browser's objct (not js) & is automatically created by browser.
// It is a global object with lost of prpts & methods.
