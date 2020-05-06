let P = new Promise((resolve, reject) => {
    let a = 1+1
    if(a == 2) {
        resolve('Success')
    } else{
        reject('Error')
    }
}) 

P
.then(function(message){
    console.log('This is in then ' + message);
})
.catch(function(message){
    console.log('This is in the catch ' + message);
})
// Result: This in in then Success
