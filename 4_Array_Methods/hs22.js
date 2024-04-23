// Important Array Methods
// foreach, map, ,filter,reduce

// let students = ['John', 'Sara', 'Jack'];

// using forEach with Array
// students.forEach(myFunction);

// function myFunction(item) {

//     console.log(item);
// }

//Updating the Array Elements
let students1 = ['John', 'Sara', 'Jack'];

// using forEach
students1.forEach(myFunction);

function myFunction(item1, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + item1;
}

console.log(students1);

//the method forEach() calculates the square of every element of the array.
// JavaScript to illustrate forEach() method
function func() {

    // Original array
    const items = [1, 29, 47];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item * item);
    });
    console.log(copy);
    }
    func();
    