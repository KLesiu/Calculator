const result = document.querySelector(".result");
let myNumber = 0;
const numbers = {
  one: document.querySelector(".one"),
  two: document.querySelector(".two"),
  three: document.querySelector(".three"),
  four: document.querySelector(".four"),
  five: document.querySelector(".five"),
  six: document.querySelector(".six"),
  seven: document.querySelector(".seven"),
  eight: document.querySelector(".eight"),
  nine: document.querySelector(".nine"),
  zero: document.querySelector(".zero"),
};
const items = {
  multiplication: document.querySelector(".multiply"),
  division: document.querySelector(".divide"),
  add: document.querySelector(".add"),
  subtract: document.querySelector(".subtract"),
  equal: document.querySelector(".equal"),
  clear: document.querySelector(".clear"),
};
const operations = () => {
  numbers.one.addEventListener("click", () => {
    myNumber = myNumber + 1;
  });
  numbers.two.addEventListener("click", () => {
    myNumber = myNumber + 2;
  });
  numbers.three.addEventListener("click", () => {
    myNumber = myNumber + 3;
  });
  numbers.four.addEventListener("click", () => {
    myNumber = myNumber + 4;
  });
  numbers.five.addEventListener("click", () => {
    myNumber = myNumber + 5;
  });
  numbers.six.addEventListener("click", () => {
    myNumber = myNumber + 6;
  });
};
operations();
console.log(numbers);
console.log(items);
