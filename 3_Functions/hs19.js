// LEXICAL SCOPE ---> inner scope have access of outer scope

function outer(){
    let username = "Avinash";
    function inner(){
        console.log("inner", username);
    }
    inner()
}
outer()

//let and const are blocked scope
{
    let first= "Avinash";
    console.log(first);
}

{
const second = "Kumar";
console.log(second);
}

// var is function scope

{
var last = "Sharma ";
}
console.log(last);


function myData(){
    if(true){
        var firstName = "Avi"
        // console.log(firstName);
    }
    console.log(firstName);
}
myData();