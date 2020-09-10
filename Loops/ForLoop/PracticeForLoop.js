// Practice for loop
// const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
// // for(let i = 0; i < days.length; i++){
// //     const element = days[i];
// //     console.log(element);
// // }
// // /*
// // Result:-
// // Sun
// // Mon
// // Tue
// // Wed
// // Thr
// // Fri
// // Sat
// // */ 

// for (let i = days.length-1; i >= 0; i--) {
//     console.log(days[i])
// }
// /*
// Sat
// Fri
// Thr
// Wed
// Tue
// Mon
// Sun
// */ 

// const numbers = [1, 2, 3, 4, 5];
// for (i=0; i < numbers.length; i++){
//     console.log(numbers[i]);
// };
// /*
// 1
// 2
// 3
// 4
// 5
// */ 

// const names = ["Andrew", "Brad", "Chris", "David"];
// for(let i = names.length-1; i >= 0; i--){
//     console.log(names[i]);
// }
// /*
// David
// Chris
// Brad
// Andrew
// */ 

// Check for largest population

let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// let bigCities = [];

// for(let i=0; i < cities.length; i++){
//     if(cities[i].population > 3000000){
//         bigCities.push(cities[i]);
//     };
// };
// console.log(bigCities);
// /*
// [
//   { name: 'Los Angeles', population: 3792621 },
//   { name: 'New York', population: 8175133 }
// ]
// */ 

let bigCitites = cities.filter((e) => {
    return e.population > 3000000;
});
console.log(bigCitites);
/*
[
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
]
*/ 