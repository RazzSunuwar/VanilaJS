let a = ["JavaScript", "TypeScript", "VScript"];

// Destructuring
// let [Programming1,Programming2,Programming3] = a;

// console.log(Programming1);  // JavaScript
// console.log(Programming2);  // TypeScript
// console.log(Programming3);  // VScript


// For two elements only
// let [Programming1,Programming2] = a;

// console.log(Programming1);  // JavaScript
// console.log(Programming2);  // TypeScript


// Leaving element of second 

let [Programming1,,Programming3] = a;

console.log(Programming1);  // JavaScript
// console.log(Programming2);  // TypeScript
console.log(Programming3);  // VScript