// jshint esversion: 7

let rollDie = () => {
  return Math.floor (Math.random() * 6) +1;

}

let controller = () => {
  let target, die1, die2, rollCount = 0, die1URL,
  die2URL, imgElem1, imgElem2, cheeryMsg;

//get the target number from the webpage
  target = document.querySelector("input").value
console.log(target);

//roll the target number (and count the rolls)
do{
  //roll the dice
die1 = rollDie();
die2 = rollDie();
  //increment the roll counter
rollCount++
  //log the dice and counter
console.log(`d1 = ${die1}, d2 = ${die2}, rollCount = ${rollCount}`)
} while(die1 + die2 != target);

//update images on the webpage
die1URL = `images/die${die1}.gif`;
console.log(die1URL);
imgElem1 = document.querySelector("img");
imgElem1.setAttribute("src", die1URL);

die2URL = `images/die${die2}.gif`;
console.log(die2URL);
imgElem2 = document.querySelectorAll("img")[1];
imgElem2.setAttribute("src", die2URL);

//display number of rolls on the webpage
cheeryMsg = `You hit your number in ${rollCount} roll${(rollCount == 1)?"":"s"}!`;
document.querySelector("div").innerHTML = cheeryMsg;


};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
