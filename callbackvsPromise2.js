const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded')
})

Promise.all([       //Note to run only 1 result use race in place of all
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
])
.then((message) => {
    console.log('Successfull in >>> ' + message)
})
.catch((message) => {
    console.log("Error in >>> " + message)
})

// Result: Successfull in >>> Video 1 recorded,Video 2 recorded,Video 3 recorded
