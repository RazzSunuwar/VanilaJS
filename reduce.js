// // Practice 1
// let numbers = [ 11, 2, 32, 5, 7, 9, ];
// // Note that sum is the call back in this example and 0 is initial value;
// let total = numbers.reduce(sum, 0);

// // All the added value will be stored in accumulator parameter
// function sum(accumulator, value, index, arr){
//     return accumulator + value
// };

// console.log(total);
// // Result: 66


// Practice 2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let maxNumber = numbers.reduce(callback, 0);



// function callback(accumulator, vaule){
//     if(accumulator > vaule){
//         return accumulator;
//     } else {
//         return vaule;
//     }
// };
// console.log("Max number in array is", maxNumber);
// // Max number in array is 10

let numbers = [1, 2, 3, 6, 5, 7, 8];

let Greatest = numbers.reduce(callback, 0);

function callback(accumulator, value){
    if (accumulator % 2 == 4){
        return accumulator;
    } else {
        return value;
    }
};

console.log(Greatest);
// Result: 8
