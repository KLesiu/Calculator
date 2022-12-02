const result = document.querySelector(".result");
let myNumber = 0;
let firstNumber = 0;
let secondNumber = 0;
let choiceNumber = 0;
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
const operationNumber = () => {
  numbers.one.addEventListener("click", () => {
    firstNumber = 1;
  });
  numbers.two.addEventListener("click", () => {
    firstNumber = 2;
  });
  numbers.three.addEventListener("click", () => {
    firstNumber = 3;
  });
  numbers.four.addEventListener("click", () => {
    firstNumber = 4;
  });
  numbers.five.addEventListener("click", () => {
    firstNumber = 5;
  });
  numbers.six.addEventListener("click", () => {
    firstNumber = 6;
  });
  numbers.seven.addEventListener("click", () => {
    firstNumber = 7;
  });
  numbers.eight.addEventListener("click", () => {
    firstNumber = 8;
  });
  numbers.nine.addEventListener("click", () => {
    firstNumber = 9;
  });
  numbers.zero.addEventListener("click", () => {
    firstNumber = 0;
  });
};
const operationItems = () => {
  items.multiplication.addEventListener("click", () => {
    items.multiplication.classList.add("active");
  });
  items.division.addEventListener("click", () => {
    items.division.classList.add("active");
  });
  items.add.addEventListener("click", () => {
    items.add.classList.add("active");
  });
  items.subtract.addEventListener("click", () => {
    items.subtract.classList.add("active");
  });
  items.equal.addEventListener("click", () => {
    items.equal.classList.add("active");
  });
};
operationItems();
operationNumber();
console.log(numbers);
console.log(items);
myNumber = choiceNumber;
