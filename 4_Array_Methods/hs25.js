//EVERY METHOD
//SOME METHOD
//FILL METHOD
//SPLICE METHOD

//EVERY METHOD ---> It checks if all elements pass th especified test. return in true is it satisfied otherwise false.

const numbers = [2, 4, 8, 10, 18];
const ans = numbers.every((number) => number % 2 === 0);
function even(number) {
    return number % 2 === 0;
}

// console.log( "Even no is present-",ans);

// checking that every product's price is < 60000
const user = [
    { id: 1, productName: "Mobile", price: 12999 },
    { id: 1, productName: "Tablet", price: 14000 },
    { id: 1, productName: "Led Tv", price: 19000 },
    { id: 1, productName: "Laptop", price: 54999 },
]
const rs = user.every((cartitem) => cartitem.price < 60000);
// console.log("All the product are above 6000-",rs);

// //SOME METHOD ---> to check specific value or character 
const sumnum = [3, 6, 8, 9, 1, 2];
function great4(item) {
    return item > 4;
}
const outputsum = sumnum.some(great4);
// console.log("Atleast one value is greater than 4-",outputsum);


const person = [
    { name: "Avinash", age: 2 },
    { name: "Aman", age: 22.5, }
]
function Adult(person) {
    return person.age >= 18;
}

const resultPerson = person.some(Adult);
// console.log("Atleast one peron is over 18-",resultPerson);

//FILL METHOD ---> it fills a given range of arrray element with the given values.
//syntax: arr.fill(value,start_index,end_index)

const fillArray = new Array(10).fill(-1);
// console.log(fillArray);

// In this example, we will fill an array with 0 starting from an index at 2 till the end index of 4.

const array = [1, 2, 3, 4];
const fillar = array.fill(0, 2, 4);
// console.log(fillar);

//SPLICE METHOD ---> It is used to change the contents of an array by removing/replacing existing elements and/or adding new elements
// SYNTAX: Array.splice( index, remove_count, item_list )
const splicearray = ['item1', 'item2', 'item3', 'item4']
const del1 = splicearray.splice(1, 1, "del");
console.log(del1); //print the deleted items
console.log(splicearray);

const del2 = splicearray.splice(1, 1, "inserted Item5");
console.log(del2);
console.log(splicearray);