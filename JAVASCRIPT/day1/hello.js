console.log("HELLO JS");
let radius = [2, 3, 4, 5];

// let a = arr.map((ele) => {
//   return ele + 1;
// });

// console.log(a);

let area = function (radius) {
  const op = [];

  for (let i = 0; i < radius.length; i++) {
    op.push(Math.PI * radius[i] * radius[i]);
  }
  return op;
};

let diameter = function(radius){
    const op = [];

    for (let i = 0; i < radius.length; i++) {
        const element = radius[i];
        op.push(2*Math.PI*radius[i])
    }
    return op
} 



console.log(area(radius));
console.log(diameter(radius));


