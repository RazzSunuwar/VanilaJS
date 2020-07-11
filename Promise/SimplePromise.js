// let p = new Promise((resolve, reject) => {
//   let a = 2+5;
//   if(a==5) {
//     resolve("Success")
//   }else {
//     reject("Failure")
//   }
//
// });
//
// p
// .then(function(data){
//   console.log("This is ", data);
// })
// .catch(function(err){
//   console.log("This is ", err);
// })



const hack = new Promise(function(resolve, reject){
  let hacker = true;
  if(hacker){
    resolve("Succeful")
  }else{
    reject("Failure")
  }
})

hack
.then(function(data){
  console.log("Hacking ", data)
})
.catch(function(data){
  console.log("Hacking", data)
})
