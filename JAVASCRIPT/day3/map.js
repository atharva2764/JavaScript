// Q1
// let arr = [2, 4, 6, 8, 10];

// let op = arr.map((x) => {
//   return x * 3;
// });

// console.log(op);

// Q2
// let numbers = [12, 7, 25, 4, 18, 9, 30, 15];

// let op = numbers.filter((x) => {
//   return x > 15;
// });

// console.log(op);

// Q3
// let numbers = [10, 20, 30, 40, 50];

// let op = numbers.reduce((acc, current) => {
//   acc = acc + current;

//   return acc;
// }, 0);

// console.log(op);

// Q4

// let numbers = [5, 12, 8, 21, 30, 7, 18];

// let filtered = numbers.filter((x) => {
//   return x > 10;
// });
// let op = filtered.map((x) => {
//   return x * 2;
// });

// console.log(op);

// Q5

let prices = [100, 250, 80, 400, 150, 50, 300];

let filArr = prices.filter((x) => {
  return x > 150;
});

let discount = filArr.map((x) => {
  return x - (x * 10) / 100;
});

let total = filArr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log(filArr);
console.log("//////////////////////////////////////////");
console.log(discount);
console.log("//////////////////////////////////////////");
console.log("Total : " + total);
