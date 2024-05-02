// MAPS
// OBJECT. ASSIGN
// OPTIONAL CHAINING


// MAP ---> It is iterable, 
// stored data in ordered, 
//store key value pairs 
//duplicate keys are not allowed

//added key values pair to Map
const person = new Map();
person.set ("firstname","Avinash");
person.set ("age",22);
person.set (1,"one");
// console.log(person);
// console.log(person.get("firstname"));  
// console.log(person.keys());

const pmap= new Map();
pmap.set("apples", 500);
pmap.set("bananas", 300);
pmap.set(200, "oranges");
// console.log(pmap);
// console.log(pmap.keys())
for (let key of pmap.keys()){
    // console.log(key, typeof key)
}

//we can add value in object wth of Map
const person1={
    id: 1,
    firstname: "avinash"
}
const userinfo=new Map();
userinfo.set(person1, {age:8, gender:"male"});
// console.log(userinfo);

// OBJECT. ASSIGN ---> is used to copy the values and properties from one or more source objects to a target object.
// clone by Object.assign
//SYNTAX: Object.assign(target, ...sources);

const obj ={
    key1: "value1",
    key2: "value2"
}
const obj2= Object.assign({},obj)
obj.key3= "value3"; // Add new key-value pair to obj.
// console.log(obj);
// console.log(obj2);


// OPTIONAL CHAINING ---> (?.) it is an error-proof way to access nested object properties, even if intermediate property doesn't exist.

const user={
    firstname: "Avinash",
    // address: {Hno: '93'} 
}
console.log(user.firstname);
console.log(user?.address?.Hno);
