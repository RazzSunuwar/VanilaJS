// var Mobile = function(){

// }
// console.log(Mobile.prototype);

// var lg = new Mobile();
// console.log(lg.__proto__);

// // Verify
// console.log(Mobile.prototype === lg.__proto__)  //print true in the browser console
// console.log(Mobile.prototype === lg.__proto__)  //print true in the browser console
// console.log(Mobile === Mobile.prototype.constructor)  //print true in the browser console



function Mobile(){

}
Mobile.prototype.a = 10;

var lg = new Mobile();
console.log(lg.a);  // console 10
