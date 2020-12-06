// Apply function
//
// let Person = {
//     fullName: function(address, phone) {
//         return this.firstName+ " "+ this.lastName+", "+ address+", "+ phone;
//     }
// };
//
// let PersonFirst = {
//     firstName: "Ronald",
//     lastName: "Gate"
// };
//
// let PersonSecond = {
//     firstName: "Romeo",
//     lastName: "Gate"
// };
//
// personFullName = Person.fullName.apply(PersonFirst, ["Ktm", "124555"]);
// console.log(personFullName);


// Apply function

let Person = {
  fullName: function(address, phone) {
    return this.firstName+ " "+ this.lastName+" "+address+" "+phone;
  }
};

let PersonFirst ={
  firstName: 'John',
  lastName: 'Doe'
};

let PersonSecond = {
  firstName: 'Albert',
  lastName: 'Doe'
};

PersonFullName = Person.fullName.apply(PersonFirst, ["Ktm", "12345"]);
console.log(PersonFullName);
// Result: John Doe Ktm 12345
