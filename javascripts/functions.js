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

let arrMax = (arr) _> {
  //
};
//==============================
let fruits = ["apple", "orange", "plum"]
let result = "";
let maxSoFar = fruits[0].length;
//iterate over array ay
fruits.forEach((elem) => {
  if(elem.length > maxSoFar){
    maxSoFar = elem.length;
  }
});

console.log(maxSoFar);
//===============================
