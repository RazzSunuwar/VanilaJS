// function createQuote(quote, callback){
//   let myQoute = "Like i always say" + quote;
//   callback(myQoute);   //2
// }
//
// function logQuote(quote){
//   console.log(quote);
// }
//
// createQuote("eat your vegetables!", logQuote);  //1
// // createQuote("eat your vegetables!", function(quote){
// //   console.log(quote)
// // });


// Example that simulates a request to a server:
function serverRequest(query, callback){
  setTimeout(function(){
    let response = query + "full";
    callback(response);
  })
}

function getResults(results){
  console.log("Response to the server: " + results)
}

serverRequest("The glass is half ",getResults)

// Result: Response to the server: The glass is half full
