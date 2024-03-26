// Iterate in Objects
// Object.keys

const person={
    name:"Avinash",    
    age:20,
    "person hobbies": ["Football","Cricket", "Music"],
}

// for(let key in person){
    // console.log( person[key]);
    // console.log(`${key}:${person[key]}`);
    // console.log(key ,":",person[key]);
// }
// console.log(Object.keys(person))

for(let key of Object.keys(person)){
    console.log( person[key]);
}