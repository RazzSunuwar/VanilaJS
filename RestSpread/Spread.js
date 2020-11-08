// // Spread: Increase 
// let a = [1,2,3,4];
// let b = [...a, 5,6,7];
// console.log(b);

// // [ 1, 2, 3, 4, 5, 6, 7 ]

const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd];
console.log(combined);
// Result: [ 2, 4, 6, 1, 3, 5 ]

