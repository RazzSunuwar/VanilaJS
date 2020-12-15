// var a = new Promise(function(success, failure) {
// 	setTimeout(function(){
// 		success();
// 		success();
// 		failure();
// 	}, 2000);


// });

// console.log('a is >>>', a);

// function success(data) {
// 	console.log('Success in promise >>>', data);
// };

// function failure(err) {
// 	console.log('failure in promise', err);
// };

// a

// 	.then(success) //recommended to use for success only
// 	.catch(failure)
// 	.finally(function(){
// 		console.log('promise is settled');
// 	})


// const askMoney = (amt) => {
// 	var a = new Promise(function(resolve, reject) {
// 	 	setTimeout(function() {
// 	 		resolve(amt + 1000);
// 	 	}, 2000);
// 	});
// 	return a;
// };

// console.log('i want to buy mobile');
// console.log(`i don't have money so asked with parent`);
// var res = askMoney(1234567);
// res
// 	.then(function(data){
// 		console.log('Success in promise', data);
// 		console.log('i have money now');
// 	})
// 	.catch(function(err) {
// 		console.log('Error in promise', err);
// 		console.log(`i don't have money`);
// 	});
// 	console.log('Now blocking work');

// Practice 
// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("done!"), 2000);
// });

// promise
// 	.then(
// 		result => console.log(result),
// 		error => console.log(error)
// 	);

// // Result: Done!

// // Practice 1
// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("done"), 2000);
// });

// promise
// .then(
// 	result => console.log(result),
// 	error => console.log(error)
// );

// // Result: done

// const promiseA = new Promise((resolve, reject) => {
//     resolve(123);
// })
// promiseA.then( (value) => console.log("Asynchronus logging has value:", value));
// console.log("Immediate logging");

// // Immediate logging
// // Asynchronus logging has val: 123

// const promiseA = new Promise((resolve, reject) => {
//     resolve(123);
// })
// promiseA
//     .then((value) => console.log("Asynchronus logging has value: Value", value));
//     console.log("Immediate logging");
//     // Immediate logging
//     // Asynchronus logging has value: Value 123

// let number = 10;

// let promise = new Promise((resolve, reject)=>{
//     if((5+5) == number){
//         resolve("It is equal")
//     } else{
//         reject("It is not equal")
//     }
// });

// promise
// .then(
//     result => console.log(result),
//     error => console.log(error)
// );
// // It is equal

let promise = new Promise(function(resolve, reject){
    let binary = 0 + 1;
    if(binary == 5){
        resolve("Success")
    }else {
        reject("Error")
    }
});

promise
.then((result) => {
    console.log("Got result", result)
})
.catch((result) => {
    console.log("Got result", result)
});

// Result: Got result Error


