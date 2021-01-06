let numbers = [ 11, 2, 32, 5, 7, 9, ];
// Note that sum is the call back in this example and 0 is initial value;
let total = numbers.reduce(sum, 0);

// All the added value will be stored in accumulator parameter
function sum(accumulator, value, index, arr){
    return accumulator + value
};

console.log(total);
// Result: 66