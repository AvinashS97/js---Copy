//METHODS
// FUNCTION INSIDE OBJECT

// const person ={
//     firstName: "Mohit",
//     age: 18,
//     about: function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`); 
//         console.log(this);
//     }
// }
// person.about()

function info(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 ={
    firstName: "Mohit",
    age: 18,
    about: info
}
const person2 ={
    firstName: "Avinash",
    age: 20,
    about: info
}
const person3 ={
    firstName: "Sumit",
    age: 22,
    about: info
}
console.log(info);
person1.about();
person2.about();
person3.about();
