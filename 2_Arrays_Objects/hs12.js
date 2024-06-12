// Primitive vs reference data types
// Clone of an Array

// primitive
let num1 = 6;
let num2 = num1;
console.log("Value of num1 is", num1);
console.log("value of num2 is", num2);
num1++;
console.log("Value of num1 is", num1);
console.log("value of num2 is", num2);

// Reference types
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("After update array1", array1);
console.log("After update array2", array2);

//  How to clone array
let arr1 = ["item1", "item2"];
// let arr2= ["item1", "item2"];   //method 1---> put the same element 

// let arr2=arr1.slice(0).concat(["item3"]); //method 2 ---> using slice method

// let arr2=[].concat(arr1,["item3"]) ; // method3 ---> add the previous array with empty array
// let arr2=[...arr1, "item3"]; //spread operator
let arr3 = ["item4", "item5"];
let arr2 = [...arr1, ...arr3];
// arr1.push("item3");
console.log("arr1 is ", arr1);
console.log("arr2 is ", arr2);
console.log(arr1 === arr2);

