// jshint esversion: 6

//req. 3b
let arrAvg = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

//req. 3c

let arrMax = (arr) => {
  let results = "" ;
  let max = 0;

  arr.forEach(function(elem) {
    if (max < elem)
      max = elem;
      results = `${max}`;
  })
  return results
};

//req. 3d
let sumEvens = (arr) => {
  let sum = 0;

for (let i of arr) {
  if(i%2===0){
    sum = sum + i;
  }
}
  return sum;
}
