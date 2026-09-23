const cart = ["shirt", "pant", "shoes"];

const promise = createOder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);

    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch((err) => console.log(err.message));

// creating promises

function createOder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid.");
      reject(err);
    }

    const orderId = "1234";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return true;
}
