console.log("HELLO JS");
let radius = [2, 3, 4, 5];

let areaofCircle = function (radius) {
  return Math.PI * radius * radius;
};
let diameterofCircle = function (radius) {
    return radius * radius;
};

let area = function (radius,logic) {
  const op = [];
  
  for (let i = 0; i < radius.length; i++) {
      op.push(logic(radius[i]));
    }
    return op;
};


console.log(radius.map(areaofCircle))
console.log(area(radius,diameterofCircle));
console.log(area(radius,areaofCircle));




// let diameter = function(radius){
    //     const op = [];
    
    //     for (let i = 0; i < radius.length; i++) {
        //         const element = radius[i];
        //         op.push(2*Math.PI*radius[i])
        //     }
        //     return op
        // }
        
        // let a = arr.map((ele) => {
        //   return ele + 1;
        // });
        
        // console.log(a);
