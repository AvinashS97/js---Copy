// Array Destructuring


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