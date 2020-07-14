// this in method
// let person = {
//     firstName : "Brad",
//     lastName : "Watt",
//     fullName : function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// document.getElementById("demo").innerHTML = person.fullName();

// let x = this;   //Global object

// // this in a function (Default)
// document.getElementById("demo").innerHTML = myFunction();
// function myFunction(){
//     return this;    //Result: [object Window]
// }

// // this in a Function (Strict)
// "use strict";
// document.getElementById("demo").innerHTML = myFunction();
// function myFunction() {
//     return this;
// }   //undefined

// // this in Event Handlers
// <button onclick="this.style.display='none'">Click to Remove Me !
// </button>

// // Object Method Binding
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function(){
//         return this;
//     }
// }

// document.getElementById("demo").innerHTML = person.fullName();

var person1 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

var person2 = {
    firstName: "John",
    lastName: "Doe"
}

var x = person1.fullName.call(person2);

document.getElementById("demo").innerHTML = x;  // John Doe


