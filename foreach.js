// Practice 1
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(foreachfunction);

// function foreachfunction(currentValue, index, arr){
//     console.log('a[' + currentValue + '] = ' + index);
// };

// /* 
// a[1] = 0
// a[2] = 1
// a[3] = 2
// a[4] = 3
// a[5] = 4
// */ 

// // Practice 2
// let numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach((item, index, arr) => {
//     arr[index] = item + 2;
// });

// console.log(numbers);
// // Result: [ 3, 4, 5, 6, 7, 8 ]

// Practice 3
let names = ["A", "B", "C", "D", "E"];
    names.forEach((value, index, arr) => {
        arr[index] = value;
    });
console.log(names);

// Result: [ 'A', 'B', 'C', 'D', 'E' ]
