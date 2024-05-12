// How JS Works...
//  HOISTING

// 1.compilation of code ---> tokenization-->Parsing--->Code generation
// 2.execution of code
//How JS Works
// firstly code goes to than Execution context is created, Memory allocation for code and than code execution phase start.

//HOISTING ---> Access the variable or fns before declarations.
// Hoisting
function codeHoist() {
    a = 10;
    let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

// hoisting allows variables declared with var to be accessed before declaration, but not those declared with let or const. Thus, a is accessible, but b throws a ReferenceError
