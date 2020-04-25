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
const nest = {
    start : { x:5, y:8},
    end : {x: 6, y: 7}
}

const{ start : { x: startX, y: startY }} = nest;

console.log(startX);    // 5