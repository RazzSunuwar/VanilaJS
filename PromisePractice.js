// Task Part
function AskForNote(topic) {
  console.log("Friend recieved the call the call and inisit me to wait for the call");
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("Note found after 2 hours");
      resolve({
        pdfNote: topic
      })
    }, 2000);
  });
}

  // Execution Part
console.log("Start Preparation for the exam");
AskForNote("JavaScript")
  .then(function(data){
    console.log("Note arrived");
  })
  .catch(function(err){
    console.log("Error Note", err);
  });
