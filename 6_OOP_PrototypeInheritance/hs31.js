// NEW KEYWORD ---> It create empty object with this , return this and make chaining/ relatiion with fns.

function cUser(firstname, age){
    this.firstname = firstname;
    this.age = age;
}

cUser.prototype.about =function(){ 
    console.log(this.firstname, this.age);
}

const user1 = new cUser("Avi",9);
user1.about();