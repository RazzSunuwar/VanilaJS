// Async/await

// Async Functions
/* The word "async" before a function means one simple thing: a function always returns a promise.
Other values are wrapped in a resolved promise automatically.*/
// async function f() {
//     return 1;
// }
// f().then(alert); 

/* We could explicitly return a promise, which would be the same:*/
// async function f() {
//     return Promise.resolve(1);
// }
// f().then(alert); //1

/*So, async ensures that the function returns a promise, and wraps non-promise in it.
And await, the keyword only work inside async functions, and it's pretty cool. */

// Await
// The syntax:
// works only inside async functions
// let value = await Promise;

// The keyword await make JavaScript wait until that promise settles and return its result.
// Example here:
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout (() => resolve('done!'), 3000)
    });
    let result = await promise; //wait until the promise resolves(*)
    alert(result);  //Done in the browser
}
f();




