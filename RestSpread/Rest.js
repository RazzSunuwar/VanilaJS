// function sum(...args){
//     let total = 0;
//     for(const a of args){
//         total += a;
//     };
//     return total;
// };

// console.log(sum(1,2,3));

// // Result: 6

// const sum = (...args) => {
//     return args.filter(e => typeof e === "number")
//     .reduce((prev, curr) => prev + curr);
// };

// let result = sum(10, "Hi", null, undefined, 20);
// console.log(result);

// // Result: 30

// const combine = (...args) => {
//     return args.reduce((prev, curr) => prev + " "+ curr);
// };

// let message = combine("JavaScript", "Rest", "Parameters");
// console.log(message);
// // JavaScript Rest Parameters


// function myFunction(...args) {
//     let total = 0;
//     for(const a of args){
//         total += a;
//     }
//     return total;
// }

// let sum = myFunction(1,2,2);
// console.log(sum);
//  Result: 5

let mydata = (...args) => {
    let total = 0;
    for(const a of args) {
        total += a;
    }
    return total;
};

let sum = mydata(1,2,4);
console.log(sum);

// Result: 7