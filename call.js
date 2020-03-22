// let obj = {num:2};

// let addToThis = function(a, b, c){
//     return this.num + a + b + c;
// };

// // console.log(addToThis.call(obj, 3));    // functionname.call(obj, functionarguments)

// // let arr = [1,2,3];
// // console.log(addToThis.apply(obj, arr));

// var bound = addToThis.bind(obj);
// console.log(bound(1,2,3));


// Call Function

// let Person = {
//     fullName: function(address, phone) {
//         return this.firstName+ " "+ this.lastName+" "+ address+" "+phone;
//     }
// };

// let PersonFirst = {
//     firstName: "Ronald",
//     lastName: "Gate"
// };

// let PersonSecond = {
//     firstName: "Romeo",
//     lastName: "Gate"
// };

// personFullName = Person.fullName.call(PersonFirst, "KTM", "124568");
// console.log(personFullName);




// call Function

// let Person = {
//     fullName: function() {
//         return this.firstName+ " "+ this.lastName;
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
// personFullName = Person.fullName.call(PersonFirst);
// console.log(personFullName);



// call practice
 let Person = {
   fullName: function(){
     return this.firstName+ " "+ this.lastName
   }
 }

 let PersonFirst = {
   firstName: 'John',
   lastName: 'Bell'
 }

let PersonSecond = {
  firstName: 'Albert',
  lastName: 'Martin'
}

personFullName = Person.fullName.call(PersonFirst);
console.log(personFullName);
