//CLOSURES ---> A closure is the combination of a fns bundled together.
//closure give us access to an outer fns scope from an inner fns.
//function can return functions

// lexical Scoping

function outer(){
    let name = "Avinash";
    function inner(){
        console.log(name);
    }
    inner(); // inner fns have access to the variable of outer fns.
}
outer();

function outerFunction(){
    function innerFunction(){
        console.log("Hello i'm in inner fns.")
    }
    return innerFunction;
}

const ans = outerFunction();
// console.log(ans);
ans();
