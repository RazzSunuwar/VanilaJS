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

function myResult(result){
    console.log(result)
};

function total(a, b, callback){
    let sum = a + b;
    callback(sum);
};

total(5,5, myResult);

// Result: 10

