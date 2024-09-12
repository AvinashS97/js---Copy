
export class Person2 {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    info() {
        console.log(this.firstname, this.lastname, this.age)
    }
}

//! export default ---> by using default keyword we don't have to use { } in main.js file...

export default class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    info() {
        console.log(this.firstname, this.lastname, this.age)
    }
}