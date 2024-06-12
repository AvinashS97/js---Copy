// While Loop
// For Loop
// Do while loop

// While Loop
// Ex---> print 1 to 10
let i = 0;
while (i <= 10) {
    console.log(`value of i is ${i};`);
    i++
}
console.log("outside the loop");

// // Ex---> Print the sum of N number
let N = 0;
let total = 0;
while (N <= 10) {
    total = total + N;
    N++;
}
console.log(`value of sum of N number is ${total};`);

// OR 
// This method is fast as compare to above method.
let num = 10;
let total1 = (num * (num + 1)) / 2;
console.log(total1);


// FOR LOOP ---> 


// for(let i=0 ; i<=10 ; i++){
//     console.log("for loop is " +i);
// }

// Infinite loop---> it will un infinite time.
//  for(let i=0; true; i++){
//     console.log(i);
//  }

// OR
// for (let m=0 ; ; ){

//     console.log(m);
// }

//Break Keyword---> For stoping infinite loop 
for (let i = 0; true; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}

// Continue Keyword---> it stop the function and re-execte the code from next.
for (let i = 1; i <= 10; i++) {
    if (i == 4) {
        continue;
    }
    console.log("Continue in loop is " + i);
}

// Sum of N numbers

let t = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
    t = t + i;
}
console.log("sum of n number is " + t);

// Do while loop

// let o=0;
// while(o<=10){
//     console.log(`value of o is ${o};`);
//     o++
// } 

let o = 10;
do {
    console.log(o);
    o++;
}
while (o <= 9);
console.log("value of o is " + o)
