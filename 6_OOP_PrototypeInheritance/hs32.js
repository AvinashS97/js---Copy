//STATIC METHOD & PROPERTIES

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