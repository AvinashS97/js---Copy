// WINDOW OBJECTS ---> It provides access to various prpts and methods that enable interaction with the browser.

// const user1={
//     firstname:"Avinash",
//     age: 19,
//     about: function(){
    //  console.log(`Name is ${this.firstname} and age is ${this.age}
//     }
// }

// const user2={
    // firstname:"Sumit",
    // age: 18,
// }
// user1.about();
// user1.about.call(user2); //call

// function about(hobby,favsinger){
    // console.log(`Name is ${this.firstname} and age is ${this.age},${hobby},${favsinger}`)
// }

const user1={
        firstname:"Avinash",
        age: 19,}

const user2={
        firstname:"Sumit",
        age: 18,
    }
// about.call(user2,"Singing", "ChahatFatehAliKhan")
// about.apply(user1,["singing","ChahatFateh"]) //apply
// const func_bind=about.bind(user1,"singing","ChahatFateh")//bind->it store in function
// func_bind();

// Window OBJECT Properties

// Alert ---> alert() method displays an alert box with a message and an OK button.
let a = window
alert('hello')
// console.log(a);

// PROMPT() ---> The prompt() method displays a dialog box that prompts the user for input.
let b= window;
b= prompt("this is prompt");
// console.log(b)

// Confirm() ---> The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.
let c=window;
c=confirm('are you okay');
// console.log(c);

//innerHeight abd innerWidth
d=innerHeight;
e=innerWidth;
console.log(d);
console.log(e);