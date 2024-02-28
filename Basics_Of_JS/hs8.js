// Switch Statement
/*JavaScript switch statement is used to execute a block of code from multiple expressions. The expression’s value is compared with the values of each case in the structure. If a match is found, the related block of code is executed.*/

let No = 10;
switch (No) {
    case 0:
        console.log("No is zero");
        break;
    case 1:
        console.log("No is one");
        break;
    case 2:
        console.log("No is two");
        break;
    case 3: 
        console.log("No is three");
        break;
    case 4:
        console.log("No is Four");
        break;
    default:
        console.log("No is greater than 4.");
}

let grade = 'B';
let result;
switch (grade) {
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Average)";
        break;
    case 'C':
        result = "C (Below than average)";
        break;
    default:
        result = "No Grade";
}
console.log(result);