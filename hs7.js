// Ternary Operator/conditional operator 
// AND OR Operator

// Ternary Operator/conditional operator ---> It evaluates a condition and executes a block of code based on condition.

/*  let age = 14
    let drink;
    if (age<=5){
        drink= "Milk";
    }
    else{
        drink="Coffee";
    }
    console.log(drink);
*/
let age = 8;
let drink = age >= 5 ? "Milk" : "Coffee" ;
console.log(drink);

let a = 6;
let b = 8;
let c = a>b ? (a-b):(b-a);
console.log(c);

// AND OR Operator 

// AND Operator ---> it check that all condition are true.
let Fname = "Avinash"
let Fage = 18;
if  (Fname[0] == "A" && Fage >= 18){
    console.log("Name starts with A and you are eligible...")
} 
else{
    console.log("You are not eligible...")
}

// OR Operator ---> it check that any condition is true .
let Fname1 = "Avinash"
let Fage1 = 16;
if  (Fname1[0] == "A" || Fage1 >= 18){
    console.log("Name starts with A and you are eligible...")
} 
else{
    console.log("You are not eligible...")
}