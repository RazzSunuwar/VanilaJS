var a = new Promise(function(success, failure) {
	setTimeout(function(){
		success();
		success();
		failure();
	}, 2000);


});

console.log('a is >>>', a);

function success(data) {
	console.log('Success in promise >>>', data);
};

function failure(err) {
	console.log('failure in promise', err);
};

a

	.then(success) //recommended to use for success only
	.catch(failure)
	.finally(function(){
		console.log('promise is settled');
	})