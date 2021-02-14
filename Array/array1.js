// let myArray = ["Good", "Better", "Best"];


// let newArray = myArray.splice(1,1);
// console.log(newArray);

// // Result: ["Better"]

// let myArray1 = ["Apple", "Berry", "Coconut", "Orange"];
// myArray1.forEach(function(index, item){
 //   document.getElementById("demo").innerHTML += index + ":"+ item + "<br>"
// });

// let fruits = ["Grapes", "Mango", "Apple", "Papaya"];
// let result = fruits.sort();
// console.log(result);

// // [ 'Apple', 'Grapes', 'Mango', 'Papaya' ]

//let numbers = [4, 9, 25,];
//let result = numbers.map(Math.sqrt);
//console.log(result);
//Result: [ 2, 3, 5 ]

// let number = [10, 12, 14, 16, 18];

// function passresult(num){
//     return (num >= 10)
// };

// function myFunction(){
//     console.log(number.every(passresult));
// };

// myFunction();

// // Result: true

// some()
// let strings = [1, 7, 5, 9, 4, 6, 8, 2, 3];
// let lessThanFive = strings.some((e) => {
//     return e < 5;
// });
// console.log(lessThanFive);

// // Result: true

// entries()
// let numbers = ["A", "B", "C"];
// let result = numbers.entries();

// for(value of result){
//  console.log(value);
// }
// /*
// [ 0, 'A' ]
// [ 1, 'B' ]
// [ 2, 'C' ]
// */

// find()
let ages = [2, 4, 17, 18, 20, 22, 24];

function checkAdult(age){
    return age >= 18;
}

function myFunction(){
    let adults = ages.find(checkAdult);
    console.log(adults);
}

myFunction();

// Result: 18