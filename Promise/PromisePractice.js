
// // Task Part
// function AskForNote(topic) {
//   console.log("Friend recieved the call the call and inisit me to wait for the call");
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       console.log("Note found after 2 hours");
//       resolve({
//         pdfNote: topic
//       })
//     }, 2000);
//   });
// }
//
//   // Execution Part
// console.log("Start Preparation for the exam");
// AskForNote("JavaScript")
//   .then(function(data){
//     console.log("Note arrived");
//   })
//   .catch(function(err){
//     console.log("Error Note", err);
//   });


  // // Task part
  // function PrintNote(pdfNote){
  //   return new Promise(function(resolve, reject){
  //     console.log("Note is in the stationary");
  //     console.log("Shopkeeper promise to call me after finished printing");
  //     setTimeout(function(){
  //       let electricity = true;
  //       if(electricity){
  //         resolve("Success")
  //       }else{
  //         reject('Error')
  //       }
  //     }, 2000);
  //   })
  // };
  //
  // PrintNote("PdfNote")
  // .then(function(data){
  //   console.log("Print note >>>", data);
  // })
  // .catch(function(error){
  //   console.log("Print note >>>", error);
  // })

// // Task part
// function entertainment(){
//   return new Promise(function(resolve, reject){
//     console.log("Entertainment start");
//     setTimeout(function(){
//       resolve()
//     }, 2000)
//   })
// }
//
// // Execution Part
// entertainment()
// .then(function(){
//   console.log("Entertainment finished. It was Nice movie")
// })
// .catch(function(){
//
// })


// Task part
function servicing(){
  return new Promise(function(resolve, reject){
    console.log("Bike is at servicing");
    setTimeout(function(){
      resolve()
    }, 2000)
  })
}

// Execution Part
servicing()
.then(function(){
  console.log("Servicing Finished")
  console.log("Now start Preparation")

})
.catch(function(){

})
