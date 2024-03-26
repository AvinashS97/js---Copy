// Iterate in Objects
// Object.keys
// Computed Properties
//Spread Operator

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

// for(let key of Object.keys(person)){
//     console.log( person[key]);
// }

// Computed Properties
// const key1="objkey1";
// const key2="objkey2";

// const value1="myvalue1";
// const value2="myvalue2";

// const obj ={
//     [key1]:value1,
//     [key2]:value2,
// }
// console.log(obj);

//Spread Operator in Array

// const array1=[1,2,3]; //Ex. of spread Operator in Array
// const array2= [5,6,7];
// const Newarray3 = [...array1, ...array2,89, ..."abc"];
// console.log(Newarray3);

// Spread Operator in Object
const obj1={
    key1:"value1",
    key2:"value2",
}
const obj2={
    key1:"valueChange",
    key3:"value3",
    key4:"value4",
};
const newObject={...obj1, ...obj2, key10:"value10"}
console.log(newObject)