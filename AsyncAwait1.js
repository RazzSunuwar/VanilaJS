console.log("Person 1: Show ticket");
console.log("Person 2: Show ticket");

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket')
  }, 2000)
});

const getPopcorn = promiseWifeBringingTickets
.then((t) => {
  console.log("Husband: We should go in");
  console.log("Wife: No i am hungry");
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn
.then((t) => {
  console.log("Husband: I got some popcorn")
  console.log("Husband: We should go in")
  console.log("Wife: I need butter in my popcorn")
  return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter
.then((t) => console.log(t));

console.log("Person 4: Show ticket");
console.log("Person 5: Show ticket");
