// ARRAY FUNCTION
// HOISTING
// FUNCTION INSIDE FNS

//ARRAY FUNCTION

const sum = (num1, num2, num3) => {
  return num1 + num2 + num3;
}
console.log(sum(5, 0, 9));

const song = () =>
  console.log("Happy Birthday 2 U song");

song();

const iseven = number =>
  number % 2 === 0;
console.log(iseven(2));

// HOISTING---> Declaration are moved to the top of functions scope during execution.

hello();
function hello() {
  console.log("hello World");
}

// FUNCTION INSIDE FNS

const app = () => {
  const myfun1 = () => {
    console.log("1st function in funs")
  }
  console.log("inside function");
  myfun1();
}

app(); 