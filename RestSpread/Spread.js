// // Spread: Increase 
// let a = [1,2,3,4];
// let b = [...a, 5,6,7];
// console.log(b);

// // [ 1, 2, 3, 4, 5, 6, 7 ]

// const odd = [1, 3, 5];
// const combined = [2, 4, 6, ...odd];
// console.log(combined);
// // Result: [ 2, 4, 6, 1, 3, 5 ]

// const odd = [1, 3, 5];
// const combined = [2, ...odd, 4, 6];
// console.log(combined);
// // Result: [ 2, 1, 3, 5, 4, 6 ]

let numberfirst = [1, 2, 3, 4, 5, 6, 7];
let numbersecond = [8, 9, 10];
let allnumbers = [...numberfirst, 8, 9, 10];
console.log(allnumbers);

/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/ 