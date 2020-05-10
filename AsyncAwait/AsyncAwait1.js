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


 

