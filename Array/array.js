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
// let marks = [4, 3, 5, 7, 8, 9, 2, 6];

// let lessThanFive = false;

// for(let index = 0; index < marks.length; index++){
//     if(marks[index] < 5){
//         lessThanFive = true;
//         break;
//     }
// }
// console.log(lessThanFive);  // true

// // some()
// let strings = [1, 7, 5, 9, 4, 6, 8, 2, 3];
// let lessThanFive = strings.some(function(e){
//     return e < 5;
// });
// console.log(lessThanFive);  //True


// // Check if an element exists in the array
// // The following exists() function uses the some() method to check if a value exists in an array:
// function exists(value, array){
//     return array.some(e => e===value);

// }

// let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(exists(5, marks));  //true
// console.log(exists(10, marks));  //false

// // sort()
// let numbers = [0, 1, 3, 5, 7, 9, 2, 4, 6, 8];
// numbers.sort(function(a,b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });
// console.log(numbers);   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// filter()
// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];


// // Without filter method
// let bigCities = [];
// for (let i = 0; i < cities.length; i++){
//     if(cities[i].population > 3000000) {
//         bigCities.push(cities[i]);
//     }
// }
// console.log(bigCities);
/*
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
]
*/

// // With filter method

// let bigCities = cities.filter(function(e){
//     return e.population > 3000000;
// });
// console.log(bigCities);
// /*
//   { name: 'Los Angeles', population: 3792621 },
//   { name: 'New York', population: 8175133 }
// ]
// */

// // map()
// let circles = [
//   10, 30, 50
// ];

// function circleArea(radius){
//   return Math.floor(Math.PI * radius * radius);
// }

// let areas = circles.map(circleArea);
// console.log(areas); // [ 314, 2827, 7853 ]

// // forEach()
// let ranks = ["A", "B", "C"];
// ranks.forEach(function(e){
//   console.log(e)
// });
// /*
// A
// B
// C
// */

// // reduce()

// // sum numbers of array using for loop
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// // let sum = 0;
// // for(let i=0; i<numbers.length; i++){
// //   sum+= numbers[i];
// // }
// // console.log(sum); //Sum: 28

// let reduceDemo = numbers.reduce(function(accumulator, current){
//   return accumulator + current;
// })

// console.log(reduceDemo);  //Sum: 28


// let shoppingCart = [{
//   product: "Mobile",
//   qty: 1,
//   price: 15000
// },
// {
//   product: "Earphone",
//   qty: 1,
//   price: 500
// },
// {
//   product: "Charger",
//   qty: 1,
//   price: 8000
// }]

// let total = shoppingCart.reduce((accumulator, current)=>{
//   return accumulator + current.qty * current.price;
// }, 0);
// console.log(total); // 23500


// // reduceRight()
// let numbers = [1, 3, 5, 7];
// let sum = numbers.reduceRight(function(accumulator, current){
//   console.log("Accumulator: ", accumulator, "Current:", current);
//   return accumulator + current;
// });
// console.log("Total: ", sum);

// /*
// Accumulator:  7 Current: 5
// Accumulator:  12 Current: 3
// Accumulator:  15 Current: 1
// Total:  16
// */ 


// JavaScript Multidimensional Array
let activities = [
  ["Work", 8],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1], 
  ["Sleep", 7]
];

// console.table(activities);

// // Result
// /*
// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 8 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// │    4    │   'Sleep'   │ 7 │
// */ 

// activities.push(['study', 2]);
// console.log(activities);

// /*
// [
//   [ 'Work', 8 ],
//   [ 'Eat', 1 ],
//   [ 'Commute', 2 ],
//   [ 'Play Game', 1 ],
//   [ 'Sleep', 7 ],
//   [ 'study', 2 ]  // Added new elements here
// ]
// */ 

// activities.splice(1,0, ["Promgramming", 2]);
// console.table(activities);

// /*
// ┌─────────┬────────────────┬───┐
// │ (index) │       0        │ 1 │
// ├─────────┼────────────────┼───┤
// │    0    │     'Work'     │ 8 │
// │    1    │ 'Promgramming' │ 2 │
// │    2    │     'Eat'      │ 1 │
// │    3    │   'Commute'    │ 2 │
// │    4    │  'Play Game'   │ 1 │
// │    5    │    'Sleep'     │ 7 │
// */ 

// activities.forEach(activity => {
//   let percentage = ((activity[1]/ 24) * 100).toFixed();
//   activity[2] = percentage + "%";
// });

// console.table(activities);

// /*
// ┌─────────┬─────────────┬───┬───────┐
// │ (index) │      0      │ 1 │   2   │
// ├─────────┼─────────────┼───┼───────┤
// │    0    │   'Work'    │ 8 │ '33%' │
// │    1    │    'Eat'    │ 1 │ '4%'  │
// │    2    │  'Commute'  │ 2 │ '8%'  │
// │    3    │ 'Play Game' │ 1 │ '4%'  │
// │    4    │   'Sleep'   │ 7 │ '29%' │
// └─────────┴─────────────┴───┴───────┘
// */ 


// activities.pop();
// console.table(activities);
// /*
// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 8 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// └─────────┴─────────────┴───┘
// */ 

// Removing elements from the JavaScript multidimensional array

// activities.forEach((activity) => {
//   activity.pop(2);
// });

// console.table(activities);
// /*
// ┌─────────┬─────────────┐
// │ (index) │      0      │
// ├─────────┼─────────────┤
// │    0    │   'Work'    │
// │    1    │    'Eat'    │
// │    2    │  'Commute'  │
// │    3    │ 'Play Game' │
// │    4    │   'Sleep'   │
// */ 

// Iterating over elements of the JavaScript multidimensional array

// loop the outer array
for(let i = 0; i < activities.length; i++) {
  // get  the size of the inner array
  var innerArrayLength = activities[i].length;
  // loop the inner array
  for (let j = 0; j < innerArrayLength; j++) {
    console.log("["  + i + "," + j + "] ="  + activities[i][j]);
  }
}

/*
[0,0] =Work
[0,1] =8
[1,0] =Eat
[1,1] =1
[2,0] =Commute
[2,1] =2
[3,0] =Play Game
[3,1] =1
[4,0] =Sleep
[4,1] =7
*/ 











