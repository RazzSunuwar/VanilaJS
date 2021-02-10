"use strict"

function *generator() {
    console.log("Hello");
    yield "Yield 1 Ran...";
    console.log("World");
    yield "Yield 2 Ran...";
    return "Returned...";
}

let iterator = generator();

for(let value of iterator){
    console.log(value);
};

// Result:
/*
Hello
Yield 1 Ran...
World
Yield 2 Ran...
*/