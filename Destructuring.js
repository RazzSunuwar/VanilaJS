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
const [q, r, ...rest] = [1, 2, 3, 4, 5];    //Because of 3 dot rest elements go inside the arrray
console.log(q, r);  // 1 2
console.log(rest)   // [3, 4, 5 ]



// Pass an Object as a Function's Parameters
// const profileUpdate = (profileData) => {
//     const { name, age, nationality, location } = profileData;
//     // Do something with this variables 
// }

// Change to this

// const profileUpdate = ({ name, age, nationality, location }) => {

// }