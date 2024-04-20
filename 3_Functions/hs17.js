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

function sum(num1, num2){
  return num1 + num2;
}
console.log(sum(4,5));