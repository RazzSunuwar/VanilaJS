// // Ternary Operator
// //  Condition ? expr1 : expr2

// // Regular JavaScript
// let  age = 19;
// if(age >= 18) {
//     console.log("You are an adult!");
// } else {
//     console.log("You are kid");
// };
// // Result: You are an adult!

// // Ternary Operator
// console.log((age >= 18) ? "You are an adult!" : "You are a kid.");
// // You are an adult!


// let stop;

// age > 18 ? (
//     console.log("Ok, you can go."),
//     stop = false
// ) : (
//     console.log("Sorry, you are much too young!"),
//     stop = true
// );
// // Ok, you can go.

// let firstCheck = false,
// secondCheck = false,
// access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";
// console.log(access);
// // Ok, you can go.

function foo(bar){
    bar = typeof(bar) !== "undefined" ? bar : 10;
    console.log(bar);
}
foo();  // 10
foo(20);    //20