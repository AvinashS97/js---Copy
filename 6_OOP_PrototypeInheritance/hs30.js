//[[PROTOTYPE]] ---> __proto__

const student=['avinash','mohit','sumit','Aman']
console.log(student);

function person(fname,lname){
    this.firstname = fname
    this.lastname =lname
}

person.prototype.gender = "male";

const person1 = new person("avinash", "Kumar");
console.log(person1);