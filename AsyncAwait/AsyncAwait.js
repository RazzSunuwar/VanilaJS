// Async/await

// Async Functions
/* The word "async" before a function means one simple thing: a function always returns a promise.
Other values are wrapped in a resolved promise automatically.*/
async function f() {
    return 1;
}
f().then(alert); 

/* We could explicitly return a promise, which would be the same:*/
async function f() {
    return Promise.resolve(1);
}
f().then(alert); //1

/*So, async ensures that the function returns a promise, and wraps non-promise in it.
And await, the keyword only work inside async functions, and it's pretty cool. */


