// let a = [10, 20, 30, 40];

// function binary(x) {
//   return x.toString(2);
// }


// let op = a.map(function double(x) {
//   return x * 2;
// });

// let op1 = arr.map((x)=>{
//   return x;
// })
// let op1 = a.map((x) => x * 3);

// let op3 = a.map(binary);

// console.log(op);
// console.log(op1);
// console.log(op3);

let arr = [
  { firstname: "ramesh", lastname: "kumar", age: 30 },
  { firstname: "suresh", lastname: "tingu", age: 35 },
  { firstname: "mahesh", lastname: "supari", age: 40 },
];





let op = arr.map((x) =>{
  return x.firstname + " : " + x.lastname ;
})
console.log(op);

// full name
console.log(
  arr.map((x) => {
    return x.firstname + " "+ x.lastname;
  }),

);

// const op = arr.reduce((acc, curr) => {
    
//     if(acc[curr.age]){

//     }else{
//         acc[curr.age] = 1
//     }
//     return 
// });

// console.log(
//   arr.map((x) => {
//     x.age + " : " + op(x.age);
//   }),
// );




