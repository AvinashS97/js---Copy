// Reduce Method
//Sort Method


// Reduce Method

// let arr1 = [175, 50, 25];

// Callback function for reduce method
// function subofArray(total, num) {
// 	return total - num; 

// }
// console.log(arr1.reduce(subofArray));

let arr2 = [10,20,30,40,50,60];
//CALLBACK FNS for reduce fns(sum of all elemennt in array)

// const sum=arr2.reduce(function(acc,cur){
//     return acc + cur;
// },500)

// console.log((sum));

//or
// function sum(acc,cur){
//     return acc+cur ;
// }
// console.log(arr2.reduce(sum,500)); //we can change initial value i.e.,500

// const user =[
//     {id: 1, productName: "Mobile", price: 12000},
//     {id: 1, productName: "Tablet", price: 14000},
//     {id: 1, productName: "Led Tv", price: 19000},
//     {id: 1, productName: "Laptop", price: 54000},
// ]

// const Amount = user.reduce((totalPrice, currentPrice) => {
//     return totalPrice + currentPrice.price;
// },0)

// console.log(Amount);

//Sort Method
// In string sorting uses the ASCII Code
// const sort1=[222,54,67,11]
// sort1.sort()
// console.log(sort1);

const myArray = ["hello", "cat", "dog", "lion"];
function isLength3(string){
    return string.length === 3;
}
const output= myArray.find((isLength3));
console.log(output);

const users =[
    {userid:1, username: "Avinash"},
    {userid:2, username: "Akshay"},
    {userid:3, username: "Aman"},
    {userid:4, username: "Aditya"},
    {userid:5, username: "Anurag"},
    {userid:6, username: "Anugrah"},
]


const myUser = users.find((user)=>user.userid ===3);
console.log(myUser);

//Every Method
const numbers=[2,4,8,10,18];
// const ans= numbers.every((number) => number%2===0);
function even(number){
    return number %2 ===0;
}
const ans = numbers.every(even);
console.log(ans);

//check every product is < 60000
const user =[
        {id: 1, productName: "Mobile", price: 12000},
        {id: 1, productName: "Tablet", price: 14000},
        {id: 1, productName: "Led Tv", price: 19000},
        {id: 1, productName: "Laptop", price: 54000},
    ]
const rs =user.every((cartitem) => cartitem.price <60000);
console.log(rs);

//Some Method---> to check specific value or character 
const smethod = [3,6]