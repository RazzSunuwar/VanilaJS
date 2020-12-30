// function myResult(result){
//     console.log(result);
// };

// function total(a, b){
//     let sum = a + b;
//     myResult(sum);
// };

// total(5,5);

// Reult: 10

// JavaScript Callback

// function myResult(result){
//     console.log(result)
// };

// function total(a, b, callback){
//     let sum = a + b;
//     callback(sum);
// };

// total(5,5, myResult);

// // Result: 10

function myResult(result){
    console.log(result);
};

function myprocess(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
}

myprocess(5, 3, myResult);

// Result: 8

