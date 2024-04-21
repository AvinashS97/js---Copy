function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };  
  console.log(mycar.make); // "Honda"
//   myFunc(mycar);
  console.log(mycar.make); // "Toyota"


function singsong(){
  console.log("happy Birthday");
}
singsong();

function sum(num1, num2, num3){
  return num1 + num2 + num3;
}
console.log(sum(5,0,9));

//create a fns to find odd & even.
function EvenOdd(number){
  if(number % 2===0){
    return true;
  }
    return false;
  }
  
console.log(EvenOdd(4));