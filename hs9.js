// While Loop
// For Loop

// While Loop
// Ex---> print 1 to 10
let i=0;
while(i<=10){
    console.log(`value of i is ${i};`);
    i++
}
console.log("outside the loop");

// // Ex---> Print the sum of N number
let N=0;
let total=0;
while(N<=10){
    total= total+N;
    N++;
}
console.log(`value of sum of N number is ${total};`);

// OR 
// This method is fast as compare to above method.
// let num=10;
// let total= (num*(num+1))/2;
// console.log(total);


// FOR LOOP ---> 


// for(let i=0 ; i<=10 ; i++){
//     console.log(i);
// }

// Infinite loop---> it will un infinite time.
//  for(let i=0; true; i++){
//     console.log(i);
//  }

// OR
// for (let m=0; ;){
    
//     console.log(m);
// }

// For stoping infinite loop 
// for(let i=0; true; i++){
//     if(i==7)
//     break;
//      console.log(i);
// }