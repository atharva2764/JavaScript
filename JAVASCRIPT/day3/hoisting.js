// {
//   let a = 10;
//   const b = 20;
//   var c = 100;
// }

function x() {
  var a = 7;
  function y() {
    console.log(a);

    x();
  }
  return y;
}

let z = x();

z();

console.log(z);
