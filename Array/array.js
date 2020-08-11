// // push and pop
// let myArray = ["Ducati", "Harley Davidson", "Honda", "Yamaha", "Suzuki"];
// document.getElementById("demo").innerHTML = myArray;
// //Push()
// // function myFunction() {
// //     myArray.push("Yatri");
// //     document.getElementById("demo").innerHTML = myArray;
// // }

// // Pop()
// function myFunction() {
//     myArray.pop();
//     document.getElementById("demo").innerHTML = myArray;
// }


// Queue()


// Splice()
// let scores = [0,1,2,3,4,5,6,7,8,9];
// let removeNum = scores.splice(2,7);
// console.log(scores);    // [ 0, 1, 9 ]
// console.log(removeNum); // [ 2, 3, 4, 5, 6, 7, 8 ]

// // slice()
// let Laptops = ["HP", "Dell", "Mac", "ASUS", "MSI", "ACER", "TOSHIBA", "MICROSOFT"];
// let Brands = Laptops.slice(4,6);
// console.log(Brands);    // [ 'MSI', 'ACER' ]

// indexOf()
// let numbers = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(numbers.indexOf(50));   //4

// lastIndexOf()
// let numbers = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(numbers.lastIndexOf(50));   //4

// // Checking array elements using the for loop
// let numbers = [1, 3, 5, 7];
// let result = true;
// for (let i =0; i< numbers.length; i++){
//     if (numbers[i] <= 0){
//         result = false;
//         break;
//     }
// }
// console.log(result);    // true

// // every()
// let myNumbers = [1, 2, 3, 4, 5, 6, 7];
// let result = myNumbers.every(function(e){
//     return e > 0;
// });
// console.log(result);    //true

// some()
// Array without some() method only using for loop
let marks = [4, 3, 5, 7, 8, 9, 2, 6];

let lessThanFive = false;

for(let index = 0; index < marks.length; index++){
    if(marks[index] < 5){
        lessThanFive = true;
        break;
    }
}
console.log(lessThanFive);  // true






