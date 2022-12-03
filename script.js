// Zmienne
const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber p");
const mathSign = document.querySelector(".mathSign");
const numberButtons = document.querySelectorAll(".number");
const equalsButton = document.querySelector(".equals");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
let result = "";

// Funkcje
function displayNumbers() {
  if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
  if (this.textContent === "." && currentNumber.innerHTML === "")
    return (currentNumber.innerHTML = ".0");

  currentNumber.innerHTML += this.textContent;
}
function operate() {
  if (currentNumber.innerHTML === "" && this.textContent === "-") {
    currentNumber.innerHTML = "-";
    return;
  } else if (currentNumber === "") {
    return;
  }
  if (mathSign.innerHTML !== "") {
    showResult();
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = "";
}
function showResult() {
  if (previousNumber.innerHTML === "" && currentNumber.innerHTML === "") return;
  let a = Number(currentNumber.innerHTML);
  let b = Number(previousNumber.innerHTML);
  let operator = mathSign.innerHTML;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = b - a;
      break;
    case "x":
      result = a * b;
      break;
    case ":":
      result = b / a;
  }
  currentNumber.innerHTML = result;
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}
function clearScreen() {
  result = "";
  previousNumber.innerHTML = "";
  currentNumber.innerHTML = "";
  mathSign.innerHTML = "";
}
// Nasłuchiwanie przycisków
operatorButtons.forEach((button) => button.addEventListener("click", operate));
equalsButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clearScreen);
numberButtons.forEach((button) =>
  button.addEventListener("click", displayNumbers)
);
