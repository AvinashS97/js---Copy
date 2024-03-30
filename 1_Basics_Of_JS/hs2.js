// string indexing
// string methods
/*  string trim
    string slicing
    Lowercase and Uppercase of String  
*/

console.log("String Indexing")
let FirstName=("Avinash")
console.log(FirstName[5]);   /* It will print the 5th index value*/
console.log(FirstName.length); /* print the length-Property of Index*/
console.log(FirstName[FirstName.length-1]);  /* Print the last value of string */

console.log("Trim"); /* Used for removing extra space b/w string. */
let MyName= "  aVInAsH  ";
console.log(MyName.length); 
let newName= MyName.trim();
console.log(newName.length);
console.log(newName);

// Lowercase & UpperCase   
MyName=MyName.toUpperCase();
console.log(MyName);

MyName=MyName.toLowerCase();
console.log(MyName);

// Slice Method ----> slice(start index, end index)
let string = "Avinash";
let newString= string.slice(0,5);
console.log(newString);

// 