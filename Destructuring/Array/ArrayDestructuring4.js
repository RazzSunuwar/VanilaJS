// Nested Array Destructuring
// var a = ["C Programming", "C++", "RUST", "SCALA", "GOLANG", ["JavaScript", "TypeScript", "Python", "Java", "PHP"]];
// var[gpProgramming1,gpProgramming2,gpProgramming3,gpProgramming4,gpProgramming5, [sprogramming1, sprogramming2, sprogramming3, sprogramming4, sprogramming5]] = a;
// console.log(gpProgramming1);
// console.log(gpProgramming2);
// console.log(gpProgramming3);
// console.log(gpProgramming4);
// console.log(gpProgramming5);
// console.log(sprogramming1);
// console.log(sprogramming2);
// console.log(sprogramming3);
// console.log(sprogramming4);
// console.log(sprogramming5);

// Practice 
let Cars = ["BMW", "AUDI", "LAMBORGINI", "MERCEDES", "BUGGATI"];

function myCollection([car1, car2, car3, ...rest]){
    console.log(car1);
    console.log(car2);
    console.log(car3);
    console.log(rest);
};

myCollection(Cars);

// RESULT:

/*
BMW       
AUDI      
LAMBORGINI
D:\VanillaJS\Destructuring\Array\ArrayDestructuring4.js:22
    console.log(car4);
                ^

ReferenceError: car4 is not defined
    at myCollection (D:\VanillaJS\Destructuring\Array\ArrayDestructuring4.js:22:17)
    at Object.<anonymous> (D:\VanillaJS\Destructuring\Array\ArrayDestructuring4.js:26:1)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
PS D:\VanillaJS\Destructuring\Array> node ArrayDestructuring4.js
BMW       
AUDI      
LAMBORGINI
[ 'MERCEDES', 'BUGGATI' ]
*/ 