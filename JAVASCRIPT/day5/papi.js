//!     Promise.all()   -> with all resolve(no error)
//* it wait until all the promises and return result value this process willl take 5 seconds to return all the result

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Successful p1"), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Successful p2"), 5000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Successful p3"), 1000);
// });

// Promise.all([p1, p2, p3]).then((result) => console.log(result));

//!  Promise.all() with the 1 reject when that reject comes it will stop

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1 Rejected "), 4000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 Success "), 5000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 Success "), 3000);
});

Promise.all([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((res) => console.log(res));

// {status: 'rejected', reason: 'p1 Rejected '}
// {status: 'fulfilled', value: 'p2 Success '}
// {status: 'fulfilled', value: 'p3 Success '}
Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));


