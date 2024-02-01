console.log("This is Expressions and conditional loop statement" );

let marks = 50
let grace_marks = 2


if (marks  >40){
    console.log("you are pass");
}

else{
    console.log("you are Fail");
}

// ARITHMETIC OPERATORS
console.log("This is Arithmetic Operator" );
console.log(marks + grace_marks);  // addition operators
console.log(marks - grace_marks);  // subtraction operators
console.log(marks * grace_marks);  // multiplication operators
console.log(marks / grace_marks);  // division operators
console.log(marks ** grace_marks);  // exponential operators (**)
console.log(marks % grace_marks);  // Modules operators (it gives remainder)
 
// Assignment operator
console.log("This is Assignment Operator" );
marks += grace_marks  /* increment assignment operator */
console.log(marks);

// Comparison Operator
console.log("This is Comparison Operator" );
let x = 5;
console.log (x == 8); /* equal to */
console.log(x!= 8);  /* not equal to */
console.log(x > 8); /* greater than */
console.log(x < 8);  /* less than */
console.log(x >= 8);   /* greater than or equal to */ 
console.log(x <= 8);  /* less than or equal to */
console.log(x === 5); /* equal value and equal type */
console.log(x !== 5);  /* not equal value and not equal type */
   
// logical operator
console.log("This is Logical Operator" );
a = 5;
b= 8;
console.log (a != b);
console.log (a!=b) && (b!= a);
console.log (a!=b) || (b== a);
