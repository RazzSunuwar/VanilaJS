// Array Passing to a Function
// let arr = [10,20,30];

// function show([value1, value2, value3]){
//     console.log(value1);    //10
//     console.log(value2);    //20
//     console.log(value3);    //30
// }
// show(arr);


// // With rest operator
// let arr = [10,20,30,40,50,60,70,80];

// function show([value1, value2, value3, ...rest]){
//     console.log(value1);    //10
//     console.log(value2);    //20
//     console.log(value3);    //30
//     console.log(rest);      //[40, 50, 60, 70, 80]
// }
// show(arr);

// Practice 

let numbers = [1, 2, 3, 4, 5];

function practiceNumber([number1, number2, number3, ...rest]){
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log(rest)
}

practiceNumber(numbers);

// Result: 1
/* 2
 3
 [ 4, 5 ] */