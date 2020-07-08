// async/await works well with promise.all
// When we need to wait for multiple, we can wrap them in promise.all and then await:
// wait for the array of results
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    
]);

/*In the case of an error, it propagates as usual, from the failed promise to Promise.all, 
and then becomes an exception that we can catch using try..catch around the call. */