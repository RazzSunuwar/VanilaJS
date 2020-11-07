// async/await works well with promise.all
// When we need to wait for multiple, we can wrap them in promise.all and then await:
// wait for the array of results
// let results = await Promise.all([
//     fetch(url1),
//     fetch(url2),
    
// ]);

/*In the case of an error, it propagates as usual, from the failed promise to Promise.all, 
and then becomes an exception that we can catch using try..catch around the call. */

// async function f(){
//     return 1;
// }
// f().then(alert);

const download = (url, success, failure) => {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        let error = url.length === 0 || !url;
        error ? failure(url) : success(url);
    }, 3000);
}

download('', 
    (picture) => {
        console.log(`Processing the picture ${picture}`);
    },
    (picture) => {
        console.log(`Handling error...`);
    }
);

// Downloading  ...
// Handling error...