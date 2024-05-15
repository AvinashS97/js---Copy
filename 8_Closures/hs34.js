//LEXICAL SCOPING
//CLOSURES


// lexical Scoping

// function outer(){
//     let name = "Avinash";
//     function inner(){
//         console.log(name);
//     }
//     inner(); // inner fns have access to the variable of outer fns.
// }
// outer();


//CLOSURES ---> A closure is the combination of a fns bundled together.
//closure give us access to an outer fns scope from an inner fns.
//function can return functions

function outerFunction(){
    let name1 = "Avi";
    function innerFunction(){
        // console.log("Hello i'm in inner fns.")
        console.log(name1);
    }
    return innerFunction;// it return whole lexical scope
}

const ans = outerFunction();// 
// console.log(ans);
ans();
