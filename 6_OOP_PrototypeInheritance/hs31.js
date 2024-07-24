//! NEW KEYWORD
//! GETTER AND SETTERS


//! NEW KEYWORD ---> It create empty object with this , return this and it bind the prpt that is declared in thus keyword to the new object.
//*  Syntax: constructorFunction(arguments);

// function cUser(firstname, age){
//     this.firstname = firstname;
//     this.age = age;
// }

// cUser.prototype.about =function(){
//     console.log(this.firstname, this.age)
// }

// const user1 = new cUser("Avi",9);
// console.log(user1) 
// user1.about();

function Fruit(color, taste, seeds) {
    this.color = color;
    this.taste = taste;
    this.seeds = seeds;
}

//* Create an object
const fruit1 = new Fruit('Yellow', 'Sweet', 1);

//* Display the result
console.log(fruit1.color);

//! GETTER AND SETTERS --->  Getters and setters are defined using the get and set keywords respectively.

class person {
    constructor(firstN, lastN, age1) {
        this.firstN = firstN;
        this.lastN = lastN;
        this.age1 = age1;
    }

    get fullname() {
        return `${this.firstN} ${this.lastN}`
    }
    set fullname(fullname) {
        const [firstN, lastN] = fullname.split(" ");
        this.firstN = firstN;
        this.lastN = lastN;
    }
}
const person1 = new person("Avinash", "Sharma", 9);
console.log(person1);
person1.fullname = "Aman Kumar"
console.log(person1.fullname); // Aman Kumar
console.log(person1.firstN); // Aman
console.log(person1.lastN); // Kumar

