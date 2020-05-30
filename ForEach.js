// let numbers = [11, 22, 33, 44, 55];

// numbers.forEach(myFunction);


// function myFunction(item, index, arr){
//     arr[index] = item * 2;
// }

// console.log(numbers);   //[ 22, 44, 66, 88, 110 ]



// Practice
let  numbers = [1,2, 3, 4, 5, 6, 7];


numbers.forEach(function myFunction(item, index, arr){
    arr[index] = item * 2; 
});

console.log(numbers);   //[ 2,  4,  6, 8, 10, 12, 14 ]
