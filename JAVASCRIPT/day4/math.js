let arr = [2, 4, 5, 6];

function AreaOfCircle(radius) {
  return Math.PI * radius * radius;
}

function calculate(logic) {
  let op = [];
  for (let i = 0; i < arr.length; i++) {
    op.push(logic(arr[i]));
  }
  return op;
}

console.log(calculate(AreaOfCircle));

let div;
document.getElementById("create").addEventListener("click", function add() {
  div = document.createElement("div");
  div.style.border = "2px solid black";
  div.style.backgroundColor = "red";
  div.style.height = "300px";
  div.style.width = "300px";
  document.body.append(div);
});
