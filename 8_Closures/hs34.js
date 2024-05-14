//CLOSURES ---> A closure gives you access to an outer function's scope from an inner function.
//function can return functions

function outerFunction(){
    function innerFunction(){
        console.log("Hello i'm in inner fns.")
    }
    return innerFunction;
}

const ans = outerFunction();
// console.log(ans);
ans();
