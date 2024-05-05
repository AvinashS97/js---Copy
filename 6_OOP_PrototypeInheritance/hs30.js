//[[PROTOTYPE]] ---> __proto__

const student={
    id1:'avinash',

}

const student2={
    roll:11,
    __proto__:student
}
// console.log(student);
console.log(student2);

// function person(fname,lname){
//     this.firstname = fname
//     this.lastname =lname
// }

// person.prototype.gender = "male";

// const person1 = new person("avinash", "Kumar");
// const person2 = new person("Aman", "Singh");
// console.log(person1);
// console.log(person2);

//Changing value 

// function person(){
//     this.name ="Elon Musk"
// }
// person.prototype.age=25;
// const person1 = new person();
// person.prototype={age:52};
// const person2= new person()
// console.log(person1.age);
// console.log(person2.age);