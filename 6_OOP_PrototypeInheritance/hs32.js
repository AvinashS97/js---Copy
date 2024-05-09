//STATIC METHOD & PROPERTIES
// SUPER KEYWORD

// “this” keyword is used to call a static method within any other static method in JavaScript.
// static keyword is used before the function name

class Person{
    constructor(name,YOb,gender){
        this.name = name;
        this.Yob = Yob;
        this.gender = gender;
    }
     static greet(){
        console.log('Hey There! How are you?');
     }
}
Person.greet();

// Super keyword in JavaScript can be used to access and call on an object’s parent, it can be used in two ways.