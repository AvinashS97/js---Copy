// Arrays Methods
//PUSH, POP, SHIFT, UNSHIFT ---> push & Pop is fast than shift & Unshift.

// let fruits=["apple", "Mango", "Grapes"];
//push methods ---> Add new element in last.
// fruits.push("banana"); 
// console.log(fruits);

// pop Method ---> it will remove the last element
// fruits.pop()
// let popfruit= fruits.pop();
// console.log("popped fruit is " +popfruit);
// console.log(fruits);

// Unshift Method ---> it will add new element in starting of Array.
// fruits.unshift("banana");
// console.log(fruits);  

// Shift Method --->  remove starting element.
// fruits.shift();
// console.log(fruits) 

// var arr=[10,1,2,3].shift()
// console.log("shifted value is:" +arr)

// Array at()--->The at() method returns the same as [].
let fruits = ["banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);

// Concat array
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//Array Flat
const newArray = [1, 2, 3, [4, 5, 10], 4, 5, 6, [7, 8, [9, 0]]];
const Real_Array = newArray.flat(Infinity);
console.log("Real_Array is", Real_Array);

console.log(Array.isArray("Avinash"));
console.log(Array.from("Avinash"));

//Array.Of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));