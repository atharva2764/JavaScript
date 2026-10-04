let numbers = [10, 5, 20, 8, 15, 3, 30];

function greateThan(x) {
  if (x > 10) {
    return true;
  } else {
    return false;
  }
}

function processNumber(logic) {
  let op = [];

  for (let i = 0; i < numbers.length; i++) {
    if (logic(numbers[i])) {
      op.push(numbers[i]);
    } else continue;
  }
  return op;
}

console.log(processNumber(greateThan(numbers)));
