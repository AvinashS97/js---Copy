// callback Fns
// Fns Returning fns

// callback Fns ---> take a fns a transfer to another fns  

function fns2() {
    console.log("inside fns2")
}
function fns1(callback) {
    console.log("hello i'm fns1...");
    (callback);
}
fns1(fns2());


