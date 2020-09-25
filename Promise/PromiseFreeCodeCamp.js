let add = (x,y) => {
  return new Promise((resolve, reject) => {
    let sum = x+y;
    if(sum) {
      resolve(sum);
    }else{
      reject(Error("Could not add the two values !"));
    }
  });
};

let subtract = (x,y) => {
  return new Promise((resolve, reject) => {
    let sum = x -y;
    if (sum) {
      resolve(sum);
    } else {
      reject(Error("Could not subtract the two values !"));
    }
  });
};

// Starting promise chain
add(2,2)
.then((added) => {
  // added = 4
  return subtract(added, 3)
})

.then((subtracted) => {
  // added = 1
  return add(subtracted, 5)
})

.then((added) => {
  // added = 6
  return added * 2;
})

.then((result) => {
  // result= 12
  console.log("My result is ", result);
})

.catch((err) => {
  consolle.log(err);
})
