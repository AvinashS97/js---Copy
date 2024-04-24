// Reduce Method



// Reduce Method

let arr1 = [175, 50, 25];

// Callback function for reduce method
function subofArray(total, num) {
	return total - num;

}
console.log(arr1.reduce(subofArray));

let arr2 = [10,20,30,40,50,60];
//CALLBACK FNS for reduce fns(sum of all elemennt in array)

function sum(acc,cur){
    return acc+cur;
}
console.log(arr2.reduce(sum));