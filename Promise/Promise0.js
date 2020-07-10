const posts = [
	{title: 'Post One', body: 'This is post One'},
	{title: 'Post Two', body: 'This is post Two'}
];


function getPosts() {
	setTimeout(() => {
		let output='';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
};


function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		posts.push(post);
		const error = false;

			if(!error){
				resolve();
			} else {
				reject('Error something went wrong');
			}
		}, 2000);
	});	
};

createPost({ title: 'Post Three', body: 'This is post Three' })
.then(getPosts)
.catch(error => console.log(error));

// Result : 
/*
Post One
Post Two
Post Three
*/


// Promise.all

// const Promise1 = Promise.resolve('Hello World');
// const Promise2 = 10;
// const Promise3 = new Promise((resolve, reject) => 
// 	setTimeout(resolve, 2000, 'Goodbye')
// )
// const Promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// Promise.all([Promise1, Promise2, Promise3, Promise4])
// .then(values => console.log(values));















