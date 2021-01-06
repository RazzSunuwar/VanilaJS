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



// function callback(accumulator, value){
//     if(accumulator > value){
//         return accumulator;
//     } else {
//         return value;
//     }
// };
// console.log("Max number in array is", maxNumber);
// // Max number in array is 10

// // Practice 3
// let numbers = [1, 2, 3, 6, 5, 7, 8];

// let Greatest = numbers.reduce(callback, 0);

// function callback(accumulator, value){
//     if (accumulator % 2 == 4){
//         return accumulator;
//     } else {
//         return value;
//     }
// };

// console.log(Greatest);
// // Result: 8

// Practice 4
let store = [
    {
        product: "Laptop",
        value: 150000,
        count: 5
    },
    {
        products: "PC",
        value: 50000,
        count: 5
    },
    {
        product: "Mobile",
        value: 10000,
        count: 3
    }
];

// Task: Find the total value

let totalValue = store.reduce(callback, 0);

function callback(accumulator, item){
    return accumulator + item.value * item.count
};

console.log(totalValue);

// Result: 1030000
