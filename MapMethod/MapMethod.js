// map Method
/* The map() method creates a new array with the results of calling a provided function on every element in the
calling array. 

map calls a provided callback function once for each element in an array, in order, and returns a new array from
the results. 

The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array. */

// Syntax:- map(callback(currentValue, index, array), thisValue);

// var arrayA = [10, 20, 30, 40, 50, 60, 70, 80];
// var newArray = arrayA.map(function(value) {
// 	value ++;
// 	return value++;
// });
// console.log(arrayA);	//[10, 20, 30, 40, 50, 60, 70, 80]
// console.log(newArray);	//[11, 21, 31, 41, 51, 61, 71, 81]



let arr = [
{price: "100", product: "Laptop"},
{price: "100", product: "PC"},
{price: "100", product: "Laptop"},
{price: "100", product: "Smart-watch"}
];

let newArray = arr.map((value) => {
	return value.product;
})
console.log(newArray);
//[ 'Laptop', 'PC', 'Laptop', 'Smart-watch' ]