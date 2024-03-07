// Intro in Arrays ---> we use square bracket in array b/c of object other than C/c++...
// Arrays ---> An array is a special type of global object that allows you to store multiple values under a single name. 
// Arrays are ordered collections of all data types /  elements, and each element is assigned an index starting from 0 ordered collectons of items. 
// Array is mutable.

let fruits= ["apple", "Mango", "Grapes"];
// console.log(fruits);
// for printing of any index value
console.log(fruits[2]); 
//for chenging th evalue of any element
fruits[2]= "banana";
console.log(fruits);
// we can store any type of element in arrays.
let mixed= [1,2,3.14, "Avinash", null, undefined]; 
console.log(mixed);
// Type of array is Objec t
console.log(typeof fruits);
console.log(Array.isArray(fruits)); // to check it is arrays or not
