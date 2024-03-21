// Array Destructuring 
// Destructuring in JavaScript allows you to unpack values from arrays or properties from objects
//It assign them to variables in a concise and readable way.


// Now, let's say we have an array of 6 colors but we want to get just the first 2 colors in the array.
const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

const [first, second] = colorArr;
console.log(first, second);


const myArray=["value1","value2","value3","value4"];
// let val1 = myArray[0];
// let val2 = myArray[1];
// console.log("value of val1 is", val1);
// console.log("value of val2  is", val2);
// Or
let [val1, val2, ...myNewArray]= myArray;
console.log("value of val1 is", val1);
console.log("value of val2  is", val2);
console.log(myNewArray);