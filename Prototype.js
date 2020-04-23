// Prototype

// Prototype is parent class or super class or base class. All this classes are same.

let Mobile = function(model_no) {
	// Instance Member
	this.model = model_no,
	this.price = 10000
}

let Samsung = new Mobile('S10');
let Nokia = new Mobile('Lumia X');
// Classname.prototype.key = 'value';
Mobile.prototype.color = 'Green';	// Prototype Member

document.write(Samsung.color);
document.write(	Nokia.color);
console.log(Samsung);
console.log(Nokia);