// let person = {
//     firstName : "Ramsey",
//     lastName: "Traversy",
//     age: 25
// };

// for(let keys in person){
//     console.log(keys + ":" + person[keys]);
// }
// /*
// firstName:Ramsey
// lastName:Traversy
// age:25
// */ 


let person = {fname: "Brad", lname: "Watt", age: 25}
let text = "";
let x;
for (x in person){
    text += person[x] + " ";
}
console.log(text);
// Result: Brad Watt 25 