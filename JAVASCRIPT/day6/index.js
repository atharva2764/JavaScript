console.log("HELLo");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => "P1 Promise Complete");
  }, 5000);
});

p1.then((data) => console.log(data));

console.log();
