// Nested Array Destructuring
var a = ["C Programming", "C++", "RUST", "SCALA", "GOLANG", ["JavaScript", "TypeScript", "Python", "Java", "PHP"]];
var[gpProgramming1,gpProgramming2,gpProgramming3,gpProgramming4,gpProgramming5, [sprogramming1, sprogramming2, sprogramming3, sprogramming4, sprogramming5]] = a;
console.log(gpProgramming1);
console.log(gpProgramming2);
console.log(gpProgramming3);
console.log(gpProgramming4);
console.log(gpProgramming5);
console.log(sprogramming1);
console.log(sprogramming2);
console.log(sprogramming3);
console.log(sprogramming4);
console.log(sprogramming5);