/* Let's take the showAvatar() example example from the chapter Promises changing and rewrite it 
using async/await: */
//1. We'll need to replace ,then calls with await.
//2. Also we should make the function async for them to work.

async function showAvatar(){
    // read our JSON
    let response = await fetch('/arcticle/promise-channing/user.json')

    let user = await response.json();
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // Show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar-URL;
    img.className = "promise-avatar-example";
    document.body.append(img);
    // wait untill 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();
    return githubUser;
}  
showAvatar();

