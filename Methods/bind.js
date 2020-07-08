// // bind function
//
// let Person = {
//     name: "John"
// };
//
// let PersonGreets = function(a){
//     return "Welcome "+ this.name+" "+"to"+" "+ a;
// };
//
// let bound = PersonGreets.bind(Person); //Create a bound function that has same body and parameters
//
// console.dir(bound);     //returns a function
//
// console.log(bound("KTM"));


// Bind Practice

let Person = {
  firstName: "Daniel",
  lastName: "Dyhl"
};

let PersonFunction = function(a) {
  return "Hello"+" "+this.firstName+" "+"Welcome"+" "+"to "+a;
};

let bound = PersonFunction.bind(Person);
console.dir(bound);
console.log(bound("Nepal"));
