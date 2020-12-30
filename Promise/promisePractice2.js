function result(myResult){
    console.log(myResult);
}

let myPromise = new Promise((resolve, reject)=> {
    let x = 0;
    if( x == 0){
        resolve("OK")
    } else {
        reject("Error")
    };
});

myPromise
.then(
    function(value){
        result(value)
    },
    function(error){
        result(error)
    }
);

// Result: Ok