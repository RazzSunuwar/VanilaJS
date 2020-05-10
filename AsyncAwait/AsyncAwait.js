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

/* The function execution "pauses" at the line (*) and resumes when the promise settles, with
result becoming its result. So the code above shows "done!" in one second. */

/* Let's emphasize: await literally makes JavaScript wait until the promise settles, and 
then go on the result. That doesn't cost any CPU resources, because the engine can
do other jobs in the meantime: execute other scripts, handle events, etc.

It's just a more elegant syntax of getting the promise result 
than promise.then, easier to read and write. */



// Can't use await in regular functions
// if we try use await in non-async function, there would be a syntax error:
function f() {
    let promise = Promise.resolve(1);
    let result = await promise; //syntax error
}

/* We will get this if we do not put async before a function. As said, await only works inside 
an async function. */







