const posts = [
	{title: 'Post One', body: 'This is post One'},
	{title: 'Post Two', body: 'This is post Two'}
];

const getPosts = () => {
	setTimeout(() => {
		let output='';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
};

const createPost = (post, callback) => {
	setTimeout(() => {
		posts.push(post)
		callback();
	}, 2000);	
};

createPost({title: 'Post Three', body: 'This is post Three'}, getPosts);