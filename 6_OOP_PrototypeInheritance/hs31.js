// NEW KEYWORD ---> It create empty object with this , return this and it bind the prpt that is declared in thus keyword to the new object.
//  Syntax: constructorFunction(arguments);

function cUser(firstname, age){
    this.firstname = firstname;
    this.age = age;
}
 
cUser.prototype.about =function(){
    console.log(this.firstname, this.age)
}

const user1 = new cUser("Avi",9);
// console.log(user1) 
// user1.about();

function Fruit(color, taste, seeds) {
    this.color = color;
    this.taste = taste;
    this.seeds = seeds;
}
 
// Create an object
const fruit1 = new Fruit('Yellow', 'Sweet', 1);
 
// Display the result
console.log(fruit1.color);