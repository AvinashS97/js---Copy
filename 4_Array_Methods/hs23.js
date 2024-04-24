// Map Method
//Filter Method



//Double the number
const arr = [11,4,9,16];
function double(x){
    return x*10;
}
const arr2 = arr.map(double);
console.log(arr2);

//Convert in binary
const num = [5,1,3,2,6];
function binary(x){
    return x.toString(2);
}
const num2 = num.map(binary);
console.log(num2);

//Print the first number
const ary3 = [
    {fname:"Avinash", lname:"Sharma"},
    {fname:"Avi", lname:"kumar"},
    {fname:"Aaaa", lname:"Shar"},
];
const ary4 = ary3.map(test);
function test(x){
    return x.fname;
}
console.log(ary4);

//Filter Method---> to filter the values in array.

const filter= [5,1,3,2,6];
function isOdd(x){
    return x % 2;
}
const outputodd = filter. filter(isOdd);
console.log(outputodd);

function isEven(x){
    return x % 2===0;
}
const outputeven = filter. filter(isEven);
console.log(outputeven);

function isGreater(x){
    return x > 4 ;
}
const outputGreater = filter. filter(isGreater);
console.log(outputGreater);

// const outputGreater = filter. filter(function isGreater(x){
//     return x > 4 ;
// });
// console.log(outputGreater);