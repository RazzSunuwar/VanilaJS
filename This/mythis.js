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

// this in Event Handlers
<button onclick="this.style.display='none'">Click to Remove Me !
</button>


