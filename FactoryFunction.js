/*Factory Function: When a function return an object, we call it a factory function. It can produce object instance
without new keyword or classes. */

// function Mobile(){
// 	return {
// 		model : "S10_Plus",
// 		price : function(){ return "Price Rs. 100000";
// 		}
// 	}
// }
// let Samsung = Mobile();
// document.write(Samsung.model + " " + Samsung.price())

// Result: S10_Plus Price Rs. 100000


// Factory Function with Parameter

const mobile = (model_no) => {
	return {
		model: model_no,
		price: () => {
		return ("Price Rs.120000")
		}
	};
};

let samsung = mobile('S10_Plus');
let nokia = mobile('lumia X plus');
document.write(samsung.model + " " +samsung.price() + "<br>");
document.write(nokia.model + " "+nokia.price());

// Create Object Instance

/* Result:
S10_Plus Price Rs.120000
lumia X plus Price Rs.120000
*/
