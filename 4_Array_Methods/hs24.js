// REDUCE METHOD
// SORT METHOD
// FIND METHOD


// REDUCE METHOD

let arr1 = [175, 50, 25];

// Callback function for reduce method
function subofArray(total, num) {
	return total - num; 
}
// console.log(arr1.reduce(subofArray));

let arr2 = [10,20,30,40,50,60];
//CALLBACK FNS for reduce fns(sum of all elemennt in array)

const sum=arr2.reduce(function(acc,cur){
    return acc + cur;
},500)

console.log((sum));

//or
// function sum(acc,cur){
//     return acc+cur ;
// }
// console.log(arr2.reduce(sum,500)); //we can change initial value i.e.,500

const user1 =[
    {id: 1, productName: "Mobile", price: 12999},
    {id: 1, productName: "Tablet", price: 14000},
    {id: 1, productName: "Led Tv", price: 19000},
    {id: 1, productName: "Laptop", price: 54000},
]

const Amount = user1.reduce((totalPrice, currentPrice) => {
    return totalPrice + currentPrice.price;
},0)

// console.log(Amount);

//SORT METHOD

// In string sorting uses the ASCII Code
const sort1=[222,54,67,11]
sort1.sort() 
// console.log(sort1);

//FIND METHOD
const myArray = ["hello", "cat", "dog", "lion"];
function isLength3(string){
    return string.length === 3;
}
const output= myArray.find((isLength3));
// console.log(output);

const users =[
    {userid:1, username: "Avinash"},
    {userid:2, username: "Akshay"},
    {userid:3, username: "Aman"},
    {userid:4, username: "Aditya"},
    {userid:5, username: "Anurag"},
    {userid:6, username: "Anugrah"},
]


const myUser = users.find((user)=>user.userid ===3);
// console.log(myUser);

// Input array contain some elements.
let array = [-10, -0.20, 0.30, -40, -50];
function element(x) {
	return x > 0;
}
// Method (return element > 0).
let foundP = array.find(element);

// console.log(foundP);