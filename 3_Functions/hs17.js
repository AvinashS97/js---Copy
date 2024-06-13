//Function Declaration
//Function Expression

//Function Declaration
function singsong() {
  console.log("happy Birthday");
}
singsong();

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sum(5, 0, 9));

//create a fns to find odd & even.
function EvenOdd(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
console.log(EvenOdd(4));

//Print first Char.
function firstchar(anystring) {
  return anystring[0];
}
console.log(firstchar("Avinash"));

//find the number in array

function findTarget(array, target) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  } return -1;
}

const MyArray = [1, 12, 8, 6, 78, 99]
const ans = findTarget(MyArray, 99);
console.log(ans);

//Function Expression
const song = function () {
  console.log("Happy Birthday 2 U song");
}
song();

const iseven = function (number) {
  return number % 2 === 0;
}
console.log(iseven(2));