// If-else condition
// Nested If-else
//  else-If

// If-else condition
let age = 18;
if (age>18){
    console.log("user can play game...");
}
else{
     console.log("User can't play game...")
 }

// //Ques. Find the no. is odd or even. 
let num= 41
if(num%2===0){
    console.log("Even");
}
else{
    console.log("Odd");
}

// Falsy Values ---> These values are falsy values means they comes under the else block.
    /*  False
        ""
        null
        undefined
        0 
    */
// Truthy values ---> character in string or any type of values 
let FirstName = "";
if (FirstName){
    console.log("FirstName");
 }
else{
    console.log("FirstName is Empty");
  }

// Nested If-else 
// let winningNumber = 18;
// let UserGuess = +prompt("Guess The Number...");
// if (UserGuess === winningNumber){
//     console.log("You Won 🎉");
// }
// else{
//     if (UserGuess< winningNumber){
//         console.log("Your guess is low 😒");
//     }
//     else{
//         console.log("Your guess is High 🤣")
//     }
// }

//  else-If
let tempInDegree = 15;

if (tempInDegree<0){
    console.log("Extremely cold outside🥶");
}else if (tempInDegree<16){
    console.log("It is cold outside🤧");
}else if (tempInDegree<25){
    console.log("Wheather is okay🕺");
}else if (tempInDegree<35){
    console.log("lets go for swim🏊‍♂️");
}else if (tempInDegree<45){
    console.log("turn on the AC🕺");
}else{
    console.log("Too hot😩");
}