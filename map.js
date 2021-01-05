// let numbers = [1, 3, 5, 7, 8];

// numbers.map((item, index, arr) => {
//     arr[index] = item * 5;
// });

// console.log(numbers);
// // Result: [ 5, 15, 25, 35, 40 ]

let personList = ["Andy", "Brad", "Chris", "David"];
personList.map((list, index, arr) => {
    arr[index] = list;
});

console.log(personList);
// Result: [ 'Andy', 'Brad', 'Chris', 'David' ]


