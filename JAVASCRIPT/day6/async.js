console.log("hello");

const p = new Promise((resolve, reject) => resolve("Resolved Promise"));

async function getData() {
  return "Hello WOrld";
}
// async function getData() {
//   return p;
// }

getData().then((res) => console.log(res));
