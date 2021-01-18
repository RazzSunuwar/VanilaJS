// Syntax
/*
while(condition) {
    code block to be executed
}
*/ 

// let words = "";
// let i = 0;
// while(i < 5){
//     words += +i;
//     i++;
// };
// console.log(words);
// // Result: 01234

let cars = ["BMW", "TESLA", "LAMBORGINI", "FERRARI", "BUGGATI"];
let text = "";
let i = 0;
while(cars[i]){
    text += cars[i] + "<br>";
    i++;
};

document.getElementById("demo") = text;

