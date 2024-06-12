//Objects ---> Objects store key value pairs, It is reerence type, Objects don't have index
// How to create Objects
const person = {
    name: "Avinash",
    age: 20,
    "person hobbies": ["Football", "Cricket", "Music"],
};
console.log(person);

//Access of data in Object
console.log(person.name);
console.log(person["age"]);
console.log(person["person hobbies"]); //Access data with Sq. Bracket

//Add new key value in Object
person.SurName = "Sharma";
person["gender"] = "male";

const key = "email";
person[key] = "avinash@gmail.com";
console.log(person);
