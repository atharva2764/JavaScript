// console.log("hello");
// const cart = ["shirt", "pant", "shoes"];

// createOder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// console.log(promise);

const GITHUB_URL = "https://api.github.com/users/harshitsingh2000";
const users = fetch(GITHUB_URL);

console.log(users);

users.then(function (data) {
  console.log(data);
});
