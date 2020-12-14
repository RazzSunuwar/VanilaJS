// Callbacks

// Practice 1
// function myplan(){
//     console.log('I want to buy motorbike');
//     console.log('I asked money with parents');
//     console.log('My parents told me to wait for the money');
//     setTimeout(function(){
//         console.log('Salary arrived');
//         console.log('Now i am going to buy motorbike');
//     }, 2000);
// }
// myplan();


//Practice 2
// function buyMobile(model){
//     return model;
// }

// console.log('I want to buy mobile');
// let mobile = buyMobile('S10');
// console.log('I want to buy >>', mobile);
// console.log('Take photos');
// console.log('Post it in the Instagram');



// Practice 3

// //Task Part
// function askMoney(callback){
//     console.log('Mom told me to wait for the money untill salary arrived');
//     setTimeout(function(){
//         console.log('Salary Arrived!');
//         callback();
//     }, 2000);
// }


// // Execution part
// console.log('I want to buy mobile');
// console.log(`I don't have money so i asked to my parents`);
// askMoney(function(){
//     console.log('Asked money arrived');
//     console.log('Now i have to perform all the works which needs money');
// });
// console.log('Eat foods');
// console.log('Do exercise');
// console.log('Eat Again eat foods');


// Practice 4
//
// // Task Part
// function buyPhone(cb){
//     let phone = true;
//     setTimeout(function(){
//         let phone = false;
//         console.log('I am buying phone');
//         if(phone) {
//             cb(null, 's10');
//         } else{
//             cb('no phone');
//         }
//     }, 2000);
// }
//
// function takePhoto(){
//     console.log('Taking photos');
// };
//
// function postInInstagram(){
//     console.log('Post it in the instagram');
// };
//
// // Execution Part
// buyPhone(function(failure, success){
//     if(failure){
//         console.log('Failure in buyPhone', failure);
//     } else{
//         console.log('Success in buyPhone', success);
//     }
//     takePhoto();
//     postInInstagram();
// });
// console.log('Its raining');


// Practice 5

// let x = function(){
//   console.log("i am call from inside a function")
// }
//
// let y = function(callback){
//   console.log("do something")
//   callback()
// }
//
// y(x);

// Expected result
// do something
// i am call from inside a function



// Practice 6
// let calc = function(num1, num2, calcType){
//   if (calcType === "add"){
//     return num1 + num2;
//   } else if (calcType === "multiply") {
//     return num1 * num2;
//   }
// }
//
// console.log(calc(2, 3, "multiply"));


//                        OR

// let add = (a,b) => {
//   return a + b;
// };

// let multiply = (a,b) => {
//   return a * b;
// };

// let calc = (num1, num2, callback) => {
//   return callback(num1, num2);
// };

// console.log(calc(2, 3, multiply));


let add = function(a, b){
  return a + b;
};

let average = function(a, b){
  return (a, b)/2;
};

let total = average(10, 15);
console.log(total);

// Result: 7.5