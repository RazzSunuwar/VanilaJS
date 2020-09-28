// var Mobile = function(){

// }
// console.log(Mobile.prototype);

// var lg = new Mobile();
// console.log(lg.__proto__);

// // Verify
// console.log(Mobile.prototype === lg.__proto__)  //print true in the browser console
// console.log(Mobile.prototype === lg.__proto__)  //print true in the browser console
// console.log(Mobile === Mobile.prototype.constructor)  //print true in the browser console



// function Mobile(){
//     this.a = 20;
// }

// Mobile.prototype.a = 10;

// var lg = new Mobile();
// console.log(lg.a);  //20


let Laptop = function(model_no){
    this.model = model_no
}

let myLaptop = new Laptop(hp14);
document.write(myLaptop);