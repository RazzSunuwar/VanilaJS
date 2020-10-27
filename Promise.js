let completed = true;

let PracticeJS = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(completed){
            resolve("I have completed JavaScript.");
        } else{
            reject("I haven't completed learning JS yet.");
        };
        
    }, 3 * 1000);
});
console.log("Result: ", PracticeJS);

// Result: Check in browser console 
