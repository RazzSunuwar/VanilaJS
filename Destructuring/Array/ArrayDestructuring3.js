// Array Returning from a Function
let arr = [10, 20, 30];

function show(z){
    return z;
}

let x = show(arr);
let[value1, value2, value3] = x;
console.log(value1);    //10
console.log(value2);    //20
console.log(value3);    //30