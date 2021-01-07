// // Practice 1
// for(i=0; i < 5; i++){
//     console.log(i);
// };

// // Result: 
// /*
// 0
// 1
// 2
// 3
// 4
// */ 

// Example 2
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;
// for(i=0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum);
// // Result: 45

// Example 3
/* Method to Find Sum of N Numbers */ 
    function findSum(num) { 
        let result = 0; 
        for(let i = 1; i <= num; i++) { 
            result = result + i;
        } 
        return result
    } 
    let num = 14; 
    console.log(`Sum of numebers from 1 to ${num} is ${findSum(num)}`);
    // Result: Sum of numebers from 1 to 14 is 105
    



 