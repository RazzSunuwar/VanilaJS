function delay(t) {
  return new Promise(function(resolve) {
    return setTimeout(resolve, t)
  });
}

function logHi() {
  console.log("Hi");
}
delay(2000)
  .then(logHi);
