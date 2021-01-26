// const elements = [1, 2, 3, 4, 5];

// for(const element of elements){
//     console.log(element);
// };

// //Result: 1, 2, 3, 4, 5

// let obj = { a:1, b:2, c:3};

// for(const prop in obj){
//     console.log(`obj.${prop} = ${obj[prop]}`);
// };

// /*
// Result:
// obj.a = 1
// obj.b = 2
// obj.c = 3
// */

const iterable = [ 10, 20, 30, 40, 50, 60, 70, 80];2

for (let value of iterable){
    value *= 2;
    console.log(value);
};
