// Destructuring Practice

// Assign variables from objects
// var voxel = {x:3.6, y:7.4, z: 6.54 };
// // var x = voxel.x;
// // var y = voxel.y;
// // var z = voxel.z;

// // Simple destructuring
// const { x, y, z} = voxel;
// console.log(x, y, z); // Result: 3.6 7.4 6.54
// //              OR

// const {x:a, y:b, z:c} = voxel;
// console.log(a); //3.6



// Assign variables from nested objects
// const nest = {
//     start : { x:5, y:8},
//     end : {x: 6, y: 7}
// }

// const{ start : { x: startX, y: startY }} = nest;

// console.log(startX);    // 5



// Assign Variables from Arrays
// const [q,, r] = [1, 2, 4, 5, 6];     // 1 comma skip 1 element here
// console.log(q, r);  // 1 4



// Rest Operator to Reassign Array Elements
// const [q, r, ...rest] = [1, 2, 3, 4, 5];    //Because of 3 dot rest elements go inside the arrray
// console.log(q, r);  // 1 2
// console.log(rest)   // [3, 4, 5 ]



// Pass an Object as a Function's Parameters
// const profileUpdate = (profileData) => {
//     const { name, age, nationality, location } = profileData;
//     // Do something with this variables 
// }

// Change to this

// const profileUpdate = ({ name, age, nationality, location }) => {

// }



// Destructuring Assignment syntax is a JavaScript expression that makes it possible
// to unpack values or properties from array or objects.

// Destructuring ES5

// let fullName = ["Ramsey", "Stephenson"]
// let firstName = fullName[0]
// let lastName = fullName[1]

// console.log(firstName, lastName);   // Ramsey Stephenson


// Destructuring ES6

// const fullName = ["Ramsey", "Stephenson"];
// const [firstName, lastName] = fullName;
// console.log(firstName, lastName);   // Ramsey Stephenson


// The examples above show the benefit of using the ES6 Destructuring Assignment.
// You can also use Destructuring on objects using a similar syntax

// const fullName = { first: "Ramsey", last: "Stephenson" };
// const {first, last} = fullName;
// console.log(first, last);   // Ramsey Stephenson



/* Object Destructuring Assignment is a little bit different because the object must have
properties with the names you are assigning. Therefore the code below would not work as
intended. */

// const fullName = { first: "Ramsey", last: "Stephenson"};
// const {firstName, lastName} = fullName;

// console.log(firstName, lastName);   // undefined undefined

// You can still acheive the desired result using the following syntax.
// const fullName = { first: "Ramsey", last: "Stephenson"};
// const {first: firstName, last: lastName} = fullName;

// console.log(firstName, lastName);   // Ramsey Stephenson



// Array Destructuring

// let alphabets = ["A", "B", "C", "D"];
// let numbers = [1, 2, 3, 4, 5]

// const newArray = [...alphabets, ...numbers];
// console.log(newArray);  //["A", "B", "C", "D", 1, 2, 3, 4, 5 ]


// Factory Function
// function sumAndMuliply(a, b) {
//     return [a+b, a*b]
// }
// console.log(sumAndMuliply(5, 6));   // [11, 30]


// Destructuring
// function sumAndMuliply(a, b) {
//     return [a+b, a*b]
// }

// const [sum, multiply] = sumAndMuliply(5, 6)

// console.log(sum);
// console.log(multiply);
// // Result:
// // 11
// // 30


// Object Destructuring

// const personOne = {
//     name: 'Andy',
//     age: 26,
//     address: {
//         location: 'Earth',
//         state: 'One of them'
//     }
// };

// const personTwo = {
//     name: 'Cristen',
//     age: 24,
//     address: {
//         location: 'Mars',
//         state: 'Another One of them'
//     } 
// };


// // Destructuring
// const { name, age} = personOne;

// console.log(name);  // Andy
// console.log(age);   // 26


// const {name: firstName, address: { location } } = personTwo;
// console.log(firstName);
// console.log(location);

// // Cristen
// // Mars



// Function Object Destructuring

// const personOne = {
//     name: 'Albert',
//     age: 26,
//     address: {
//         location: 'USA',
//         state: 'California'
//     }
// };

// function prinUser(user){
//     console.log(user);
// }
// prinUser(personOne);

/* Result: {
  name: 'Albert',
  age: 26,
  address: { location: 'USA', state: 'California' }
}
*/

// const prinUser = ({ name, age }) => {
//     console.log(`Name is ${name}. Age is ${age}`);
// }
// prinUser(personOne);    // Name is Albert. Age is 26.


// Practice 
const person = {
    name: "Brad Traversy",
    age: 40,
    address: "USA"
};

const myFunction = ({ name, age, address }) => {
    console.log(`My name is ${name}. My age is ${age}. My address is ${address}.`);
};

myFunction(person);
// My name is Brad Traversy. My age is 40. My address is USA.





