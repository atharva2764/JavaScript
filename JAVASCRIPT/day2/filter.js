let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function even(x) {
  return x % 2 == 0;
}

let op = arr.filter(even);

console.log(arr.filter((x)=> x % 2));

console.log(op);
