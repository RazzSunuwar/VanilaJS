// let P = new Promise((resolve, reject) => {
//     let a = 1+1
//     if(a == 2) {
//         resolve('Success')
//     } else{
//         reject('Error')
//     }
// }) 

// P
// .then(function(message){
//     console.log('This is in then ' + message);
// })
// .catch(function(message){
//     console.log('This is in the catch ' + message);
// })
// // Result: This in in then Success


// Double callback
// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//     if(userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: 'Sad'
//         })
//     }else if(userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'Its Funny Meme'
//         })
//     } else {
//         callback('Thumbs up and Suscribe');
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success', message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// });
// // Result: Success Thumbs up and Suscribe


// Promise
const userLeft = false;
const userWatchingCatMeme = false;

const watchTutorialPromise = () => {
    return new Promise ((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: 'Sad'
            })
        }else if(userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Its Funny Meme'
            })
        } else {
            resolve('Thumbs up and Suscribe');
        }
    })
};

watchTutorialPromise()
.then((message) => {
    console.log('Success', message)
})
.catch((error) => {
    console.log(error.name + ' ' + error.message)
});
// Result: Success Thumbs up and Suscribe

