/* Constructor: Object instance are created with constructor, which are basically special function that prepare new
instance of an object for use.
*/

// function Mobile() {
// 	this.model = '3310';
// 	this.price = function(){
// 	document.write(this.model + " Price Rs. 3000 ");
// 	}
// }
// let Samsung = new Mobile();
// let OnePlus = new Mobile(); //New Instance created with name One Plus
// Samsung.price();
// OnePlus.price();

// this key will point towards new instance or 'samsung' here.

//Result = 3310 Price Rs. 3000 3310 Price Rs. 3000



// Constructor with Parameter
function Mobile(model_no){
	this.model = model_no;
	this.price = function(){
		document.write(this.model + "Price Rs.3000 <br>");
	}

}
var Samsung = new Mobile('Galaxy ');
var Nokia = new Mobile('3000 ');
Samsung.price();
Nokia.price();


/*
Galaxy Price Rs.3000
3000 Price Rs.3000
*/

/* We can create object by using:-
-Object literial
-Object Constructor
-Factory Function 
- Constructor
*/


 