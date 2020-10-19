// let numbers = [1,2,3,4,5,6,7,8,9,0];

// // function isOddNumber(number){
// //     return number % 2;
// // };

// // let oddNumbers = numbers.filter(isOddNumber);
// // console.log(oddNumbers);
// // // [ 1, 3, 5, 7, 9 ]

// function btnClicked(){
//     numbers.sort((a, b) => a - b );
// }

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", btnClicked);

// function download(url, callback){
//     setTimeout(() => {
//         console.log(`Downloading ${url}...`);
//         callback(url)
//     }, 3*1000);
// }

// function process(picture){
//     console.log(`Processing ${picture}`);
// }

// let url = "https://www.javascripttutorial.net/javascript-callback/";

// download(url, process);

function myDisplayer(some){
    console.log(some);
}

function myCalculator(num1, num2, callback){
    let sum = num1 + num2;
    callback(sum);
}

myCalculator(5,5, myDisplayer);
// Result: 10

