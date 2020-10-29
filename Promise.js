// let completed = true;

// let PracticeJS = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(completed){
//             resolve("I have completed JavaScript.");
//         } else{
//             reject("I haven't completed learning JS yet.");
//         };
        
//     }, 3 * 1000);
// });
// console.log("Result: ", PracticeJS);

// // Result: Check in browser console 

// function makePromise(completed){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             if(completed){
//                 resolve("I have completed learning JavaScript.");
//             } else {
//                 reject("I haven't completed learning JavaScript yet.");
//             };
//         }, 3 * 1000);
//     });
// };

// let learnJavaScript = makePromise(true);

// learnJavaScript.then(
//     success => console.log(success),
//     reason => console.log(reason)
// );

// // Result: I have completed Learning JavaScript.

const createApp = (completed) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(completed){
                resolve("I have completed learning JavaScript.");
            } else {
                reject("I haven't completed learning JavaScript yet.");
            };
        }, 3 * 1000);
    });
};

let learnJavaScript = createApp(true);

learnJavaScript
    .then(success => console.log(success))
    .catch(reason => console.log(reason))
    .finally(() => createApp());
// Result: I have completed Learning JavaScript.
