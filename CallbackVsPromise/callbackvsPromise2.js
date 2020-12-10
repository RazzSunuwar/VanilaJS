// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 recorded')
// })

// Promise.all([       //Note to run only 1 result use race in place of all
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ])
// .then((message) => {
//     console.log('Successfull in >>> ' + message)
// })
// .catch((message) => {
//     console.log("Error in >>> " + message)
// })

// // Result: Successfull in >>> Video 1 recorded,Video 2 recorded,Video 3 recorded


// Practice
const myFirstPromise = new Promise(function(resolve, reject){
    resolve("I am first person");
});

const mySecondPromise = new Promise(function(resolve, reject){
    resolve("I am second person");
});

const myThirdPromise = new Promise(function(resolve,reject){
    resolve("I am third person");
});

Promise.all([
    myFirstPromise,
    mySecondPromise,
    myThirdPromise
])
.then(function(message){
    console.log("Success", message);
})
.catch(function(message){
    console.log("Error", message)
})

// Result: Success [ 'I am first person', 'I am second person', 'I am third person' ]
