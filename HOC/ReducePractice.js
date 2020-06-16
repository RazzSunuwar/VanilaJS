const numbers = [1, -1, 2, 3];

// for loop

// let sum = 0;
// for(let n of numbers)
// 	sum = sum + n;
// console.log(sum);	//5

let sum =numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue
}, 0);		//Note: 0 is the initial value of accumulator
console.log(sum);
