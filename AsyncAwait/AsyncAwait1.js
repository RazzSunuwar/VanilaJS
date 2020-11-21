/* Let's take the showAvatar() example example from the chapter Promises changing and rewrite it 
using async/await: */
//1. We'll need to replace ,then calls with await.
//2. Also we should make the function async for them to work.

// async function showAvatar(){
//     // read our JSON
//     let response = await fetch('/arcticle/promise-channing/user.json')

//     let user = await response.json();
//     // read github user
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();

//     // Show the avatar
//     let img = document.createElement('img');
//     img.src = githubUser.avatar-URL;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
//     // wait untill 3 seconds
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
//     img.remove();
//     return githubUser;
// }  
// showAvatar();


// Note: await won't work in the top-level code
/*People who are starting to use await tend to forget the fact that we can't use await
 in top-level code. For example, this will not work: */

//  syntax error in top-level code
// let response = await fetch('/article/promise-chaining/user.json');
// let user = await response.json();

// But we can wrap in into an anonymous async function, like this:
// (async () => {
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();
    
// })();


 /* Like promise.then, await allows us to use thenable objects (those with a callable then method). 
 The idea is that a third-party object may not be a promise, but promise-compatible: 
 if it supports .then, that’s enough to use it with await. */

// Here’s a demo Thenable class; the await below accepts its instances:
class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        // resolve with this.num*2 after 1000ms
        setTimeout(() => resolve(this.num * 2), 1000); //(*)
    }
};

f = async () => {
    let result = await new Thenable(1);
    alert(result);
};

f();

/* if await gets a non-promise object with .then, it calls that method providing the built-in 
functions resolve and reject as arguments (just as it does a regular Promise executor). Then
awaits until one of them is called (in the example above it happens in the line (*) 
and then proceeds with the result.) */



// async/await and promise.then/catch
/*When we use async/await, we rarely need .then, because await handles the waiting for us. 
And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

But at the top level of the code, when we’re outside any async function, we’re syntactically unable 
to use await, so it’s a normal practice to add .then/catch to handle the final result or 
falling-through error, like in the line (*) of the example above. */

