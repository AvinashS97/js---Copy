//[[PROTOTYPE]] ---> __proto__ is the reference of object/fns...

const student1={
    id1:'avinash',

}
const student2={
    roll:11,
    __proto__:student1
}
console.log(student1);
console.log(student2);


//Example to add a new prpty to the object

function Student(a, b) {
    this.name = a;
	this.id = b;
}

Student.prototype.age = 12;

const s1 = new Student("Dinesh", 1234567);

// console.log(s1.name + " is " + s1.age + " years old.");

// functions can be treated as Objects... functions + objects

function person(fname,lname){
    this.firstname = fname
    this.lastname =lname
}

person.prototype.gender = "male";

const person1 = new person("avinash", "Kumar");
const person2 = new person("Aman", "Singh");
// console.log(person1);
// console.log(person2);

//Changing value 

function p(){
    this.name ="Elon Musk"
}
person.prototype.age=25;
const p1 = new p();
person.prototype={age:52};
const p2= new p()
// console.log(p1.age);
// console.log(p2.age);
