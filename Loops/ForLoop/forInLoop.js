let person = {
    firstName : "Ramsey",
    lastName: "Traversy",
    age: 25
};

for(let keys in person){
    console.log(keys + ":" + person[keys]);
}
/*
firstName:Ramsey
lastName:Traversy
age:25
*/ 