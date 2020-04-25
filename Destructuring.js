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
const fullName = { first: "Ramsey", last: "Stephenson"};
const {first: firstName, last: lastName} = fullName;

console.log(firstName, lastName);   // Ramsey Stephenson
