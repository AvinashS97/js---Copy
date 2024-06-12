// Typeof Operator
// Data Conversion ---> number to string & String to number
// Primitive Data Types

let FName = "Avinash";
let age = 20;
let marks_grade = 8.4;
const student = true;
let money = undefined;
let pocket = null;

console.log(typeof FName, typeof age, typeof marks_grade, typeof student, typeof money, typeof pocket);

// Data Conversion
// String to number---> To change into Number just add "+" before the String.
let x = "Avinash"
console.log(typeof (+"x"));
// Or
x = Number(x);
console.log(typeof x);
// Number to string---> To change into String just add "" After the Number.
let newAge = 21;
console.log(typeof (21 + ""));
// Or
newAge = String(newAge);
console.log(typeof newAge);

// String Concatenation
let string1 = "Avinash";
let string2 = "Kumar";
let fullName = string1 + "  " + string2;
console.log(fullName);

// concatenation in additiion
let newString1 = "17";
let newString2 = "04";
let Nage = +newString1 + +newString2;
console.log(Nage);

// Template String
let age1 = 21;
let name1 = "Avinash";
let aboutMe = "My name is " + name1 + " and my age is " + age1 + " ";
console.log(aboutMe);

let aboutMe1 = `My name is ${name1} and my age is ${age1}. `
console.log(aboutMe1);