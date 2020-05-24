// Object Destructuring
// let Person ={
//     id: 1,
//     name:"Mark",
//     phone: 1234567,
//     address: "California"
// };

// let{ id, name, phone, address } = Person;   //id, name, phone, address all are keys
// console.log(id);    //1
// console.log(name);  //Mark
// console.log(phone); //1234567
// console.log(address);   //California

/* Note: When destructuring objects, we use the keys as variable names. This in how JavaScript
knows which property of the object we want to assign. */


// let a, b;
// ({a,b} = {a:10, b:20}); //Without parenthesis, it will be hard to do destructuring. it will show error.
// console.log(a); //10
// console.log(b); //20


// let {a,b} = {a:10, b:20};
// console.log(a); //10
// console.log(b); //20


// let {a, b=20} = {a:10};
// console.log(a); //10
// console.log(b); //20


// let {a=40, b=20} = {a:10};
// console.log(a); //10 default 40 is overwrite by 10
// console.log(b); //20

let{a:y = 40, b:z=20} = {a:10};
console.log(y)  //10 default value 40 is overwrite by 10
console.log(z)  //20