// Object Destructuring
let Person ={
    id: 1,
    name:"Mark",
    phone: 1234567,
    address: "California"
};

let{ id, name, phone, address } = Person;   //id, name, phone, address all are keys
console.log(id);    //1
console.log(name);  //Mark
console.log(phone); //1234567
console.log(address);   //California

/* Note: When destructuring objects, we use the keys as variable names. This in how JavaScript
knows which property of the object we want to assign. */