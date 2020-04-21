console.log("Person 1: Shows ticket");
console.log("Person 2: Shows ticket");

const preMovie = async () => {

  const promsieWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`Popcorn`));

  const getCandy = new Promise((resolve, reject) => resolve(`candy`));

  const getCoke = new Promise((resolve, reject) => resolve(`coke`));

  let ticket = await promsieWifeBringingTicks;

  let [popcorn, candy, coke] = await Promise.all([getPopcorn,getCandy,getCoke]);

  console.log(`${popcorn}, ${candy}, ${coke}`)

  return ticket;
}

preMovie().then((m) => console.log(`Person 3: Shows ${m}`));

console.log("Person 4: Shows ticket");
console.log("Person 5: Shows ticket");
