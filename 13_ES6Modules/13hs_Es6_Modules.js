/* ES6 modules is a powerful feature for organizing and reusing JavaScript code.

*Modules allow you to break down your code into separate files, making it more modular, maintainable, and easier to manage.

*To define a module, we use the 'export' keyword to make variables, functions, or classes available to other modules.

*To load an ES module, set "type"="module" in the html.index file or package.json or use the .mjs extension.
*/


// import { name, greet } from './13Module1.js';
// greet("Hello"); // Output: Hello Alice
//!

// import { fname  } from './13Module2.js';
// console.log("fname is",fname);

// import { fname as fn } from './13Module2.js';
// import { age } from './13Module1.js';
// console.log(fn,age);
//!

// import {Person} from './13Person.js';
// const person = new Person("John", "Ibrahim", 25)
// person.info();
// console.log(person);

//! export default ---> by using default keyword we don't have to use { } in main.js file and an access the file by any name or variable...
//* *We can use only one default in js file...*/

import P, { Person2 } from './13Person.js';
const person = new P("Virat", "Kohli", 32)
const person2 = new Person2("John", "Ibrahim", 25)
person.info();
console.log(person);
person2.info();
console.log(person2);