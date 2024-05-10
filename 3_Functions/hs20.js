//Default parameter
//rest parameter
//parameter Destructuring

function add(a,b){
    if(typeof b ==="undefined"){
        b = 1;
    }
    return a+b;
}
console.log(add(4));
//or
function add2(x,y=0){
    return x+y;
}

console.log(add2(4));

//rest parameter
function myfun(a,b,c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myfun(3,4,5);

//parameter Destructuring

const person ={
    firstN: "Avinash",
    gender: "male",
}

// function Details(obj){
//     console.log(obj.firstN);
//     console.log(obj.gender); 
// }
// Details(person)

function Details({firstN, gender}){
    console.log(firstN);
    console.log(gender); 
}
Details(person)