// console.log("Person 1: Show ticket");
// console.log("Person 2: Show ticket");
//
// const preMovie = async () => 'preMovie';
// preMovie()
// .then((m) => console.log(m));
//
// console.log("Person 4: Show ticket");
// console.log("Person 5: Show ticket");



// console.log("Person 1: Show ticket");
// console.log("Person 2: Show ticket");
//
// const preMovie = async () => {
//
//   const promsieWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ticket'), 3000);
//   });
//
//   let ticket = await promsieWifeBringingTicks;
//
//   return ticket;
// }
// preMovie().then((m) => console.log(m));
//
// console.log("Person 4: Show ticket");
// console.log("Person 5: Show ticket");




console.log("Person 1: Shows ticket");
console.log("Person 2: Shows ticket");

const preMovie = async () => {

  const promsieWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`getPopcorn`));

  const addbutter = new Promise((resolve, reject) => resolve(`butter`));

  let ticket = await promsieWifeBringingTicks;
  console.log(`Wife: i have the the ${ticket}`);
  console.log("Husband: We should go in");
  console.log("Wife: No i am hungry");

  let popcorn = await getPopcorn;
  console.log(`Husband: I got some ${popcorn}`);
  console.log("Husband: We should go in");
  console.log("Wife: I need butter in my popcorn");

  let butter = await addbutter;
  console.log(`Husband: I got some ${butter} on popcorn`);
  console.log(`Husband: Anything else darling?`);
  console.log(`Wife: Lets got we are getting late`);
  console.log(`Husband: Thank you you are for the remainder *grins*`);

  return ticket;
}

preMovie().then((m) => console.log(`Person 3: Shows ${m}`));

console.log("Person 4: Shows ticket");
console.log("Person 5: Shows ticket");
