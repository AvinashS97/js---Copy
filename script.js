//  We use let in modern JS B/C let is blocked scope but var ki globally scoped

console.log("hello Avinash")

var a=5; /*Declaration of variable we can't assign same fns name to let */
var b=1;
var c=5;
console.log (a+b+6)
console.log (a+b+c)
console.log(typeof a,typeof b, typeof c)  /* Typeof operator  */

const a1=6;  /* declaration of const*/
// a1= a1+5;   /* ( Const are not  allowed to be change) */
console.log("a1");

// let is blocked scope & var is globally scoped.
let x ="Avinash";
// convert string to number
console.log(typeof(+"x"));

let y= 19;
// convert number to string

console.log(y + "");
console.log(typeof (y + ""));
let z= 8.4;
const f= true;
let g= undefined;
let h= null;  // Null is primitive Data Types but type of Null is Object
console.log(x,y,z,f,g,h)
console.log( typeof x, typeof y, typeof z, typeof f, typeof g, typeof h)

// HOW to create object in JS? 
let o={
    "name": "Avinash",
    "job role": "engineer"
}
console.log(o)
console.log(typeof o)
o.salary = "5LPA"  // to add/change element in object

console.log(o)


