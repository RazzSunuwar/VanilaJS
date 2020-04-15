// Task Part
function askForNote(topic){
	console.log("Friend received the phone and insit to callback after he finds note");
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log('Note found after 2 hours');
			resolve({
				pdfNote: topic
			})
		}, 2000)

	})
};


function printNote(pdfNote){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log("Note is in stationary");
			console.log("Shopkeeper promise to callback after he finished printing note");
			let electricity = true;
			if(electricity) {
				setTimeout(function(){
					resolve('printNote')
				}, 3000);
			}
		})
	})
}

function entertainment() {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			resolve();
		},2000);
	})
	
};

function servicing(bike) {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			resolve();
		}, 2000);
	})
}


// Execution Part
console.log("Start Preparation for the exam");
askForNote("Node JS")
	.then(function(data){
		console.log("Note arrived");
		return printNote("PdfNote");
	})
	.then(function(data){
		console.log("Print note success");
		return entertainment();
	})
	.then(function(data){
		console.log("Entertainment finished");
		return servicing();
	})
	.then(function(data){
		console.log("Result of servicing");
		console.log('Now start Preparation');
	})
	.catch(function(err){
		console.log('Error in promise>>>', err);
	})

