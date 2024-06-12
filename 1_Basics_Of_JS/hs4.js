// Undefined, NUll, BigInt

// Undefined
let FirstName;
console.log(typeof FirstName);
FirstName = "AVinash";  /*we can assign value after declaration of variable */
console.log(typeof FirstName, FirstName);

var FirstName2;
console.log(typeof FirstName2);

/* ( Const are not  allowed to be change) */
// const  FirstName3 ;
// console.log(typeof FirstName3);  /* It gives error*/

// Null
let myVariable = null;
console.log(typeof myVariable); /* type of Null is Object but Null is primitive data-type */

// BigInt
let myNumber = BigInt(1234);
let myNumber2 = 12345n;
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + myNumber2); /*we can't perform any action on BigInt and Other types */
console.log(myNumber2);