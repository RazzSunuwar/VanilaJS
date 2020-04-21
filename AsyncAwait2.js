// console.log("Person 1: Show ticket");
// console.log("Person 2: Show ticket");
//
// const preMovie = async () => 'preMovie';
// preMovie()
// .then((m) => console.log(m));
//
// console.log("Person 4: Show ticket");
// console.log("Person 5: Show ticket");



console.log("Person 1: Show ticket");
console.log("Person 2: Show ticket");

const preMovie = async () => {

  const promsieWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  let ticket = await promsieWifeBringingTicks;

  return ticket;
}
preMovie().then((m) => console.log(m));

console.log("Person 4: Show ticket");
console.log("Person 5: Show ticket");
