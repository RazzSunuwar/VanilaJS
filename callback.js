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

// Task Part
function buyPhone(cb){
    setTimeout(function(){
        console.log('I am buying phone');
        cb();
    }, 2000);
}

function takePhoto(){
    console.log('Taking photos');
};

function postInInstagram(){
    console.log('Post it in the instagram');
};


// Execution Part
buyPhone(function(){
    takePhoto();
    postInInstagram();
});
console.log('Its raining');







