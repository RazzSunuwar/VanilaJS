// Prototype

// Prototype is parent class or super class or base class. All this classes are same.


// Using Prototype

// let Mobile = function(model_no) {
// 	// Instance Member
// 	this.model = model_no,
// 	this.price = 10000
// }

// let Samsung = new Mobile('S10');
// let Nokia = new Mobile('Lumia X');
// // Classname.prototype.key = 'value';
// Mobile.prototype.color = 'Green';	// Prototype Member

// document.write(Samsung.color);
// document.write(	Nokia.color);
// console.log(Samsung);
// console.log(Nokia);



// Practice without prototype
var Mobile = function(model_no){
	this.model = model_no;
	this.price = 3000;
}

var Samsung = new Mobile('Note');
var OnePlus = new Mobile('Touch');
Samsung.color = 'White';
OnePlus.color = 'Black';
console.log(Samsung.color);
console.log(OnePlus.color);
console.log(Samsung);
console.log(OnePlus);

/*
White
Black
Mobile { model: 'Note', price: 3000, color: 'White' }
Mobile { model: 'Touch', price: 3000, color: 'Black' }
*/ 