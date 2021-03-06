// A return statement may be return Any type data, include arrays and objects.
// Syntax:- return (variable or expression);
/* Syntax:- 
function function_name(para1, para2,...){
    Block of statement;
    return (expression);
}
*/ 


// // Example 1
// const add = (a, b) => {
//     return (a + b)
// }
// console.log("Return the answer", add(10, 20));  // Return 30
// // Note Expession will return when the function calls


// const myFunction = (a, b) => {
//     return(a*b);
// }
// console.log(myFunction(2,5));
// // Result: 10


const myFunction = (a, b) => {
    return ( a * b);
};

let result = myFunction(10, 2);
console.log(result);

// Result: 20

