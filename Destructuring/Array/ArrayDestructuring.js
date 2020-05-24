// let a = ["JavaScript", "TypeScript", "VScript"];

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

// let [Programming1,,Programming3] = a;

// console.log(Programming1);  // JavaScript
// // console.log(Programming2);  // TypeScript
// console.log(Programming3);  // VScript


// Another Function
// let a, b;
// [a,b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20


// var a, b;
// [a, b=20] = [10];
// console.log(a); // 10
// console.log(b); // 20 Write default number 20


let a, b;
[a=40, b=20] = [10];
console.log(a); // 10 because default value of a is overwrite by 10;
console.log(b); //20




