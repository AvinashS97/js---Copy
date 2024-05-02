// ITERABLES
// SETS


// ITERABLES ---> the data structure that have the symbol.iterator() method.
//Ex:- Array,Strings, Set etc are iterables. 

const firstname= "Avinash";
for(let char of firstname){
    // console.log(char); // Strings are iterables.
}

const items=["item1","item2", "item3"];
for(let item of items){
    console.log(item); // array are iterables.
}

const users = {key1:"value1", key2:2, key3:3 }
// for(let item of users){
    // console.log(item);// objects are not iterables.
// }

// SETS --->
const num= new Set();
num.add(1)
num.add(2)
num.add(3)
num.add(["item"])
num.add(items)
console.log(num)


const numset=new Set([1,2,3,4,5]);
for (let num of numset){
    // console.log(num); // sets are iterables.
}

const myarray= [1,2,4,4,5,6,5,6];
const unique= new Set(myarray);
console.log(unique); // convert into set without duplication of element.