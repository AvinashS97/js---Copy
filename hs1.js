/*Declaration of variable we can't assign same fns name to let */

console.log("hello Avinash")
var a=5; 
var b=1;
var c=5;
console.log (a+b+6)
console.log (a+b+c)

// let is blocked scope & var is globally scoped.
let x ="Avinash";
let y= 19;
let z= 8.4;
const f= true;
let g= undefined;
let h= null;  // Null is primitive Data Types but type of Null is Object
console.log(x,y,z,f,g,h)
console.log( typeof x, typeof y, typeof z, typeof f, typeof g, typeof h)

/* declaration of const*/
const a1=6;  
// a1= a1+5;   /* ( Const are not  allowed to be change) */
console.log("a1");
