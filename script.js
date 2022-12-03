const result = document.querySelector(".result");
const item = document.querySelector(".items");
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
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 1;
    }

    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 1;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 1;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 1;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 1;
    }
  });
  numbers.two.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 2;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 2;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 2;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 2;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 2;
    }
  });
  numbers.three.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 3;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 3;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 3;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 3;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 3;
    }
  });
  numbers.four.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 4;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 4;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 4;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 4;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 4;
    }
  });
  numbers.five.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 5;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 5;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 5;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 5;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 5;
    }
  });
  numbers.six.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 6;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 6;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 6;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 6;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 6;
    }
  });
  numbers.seven.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 7;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 7;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 7;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 7;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 7;
    }
  });
  numbers.eight.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 8;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 8;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 8;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 8;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 8;
    }
  });
  numbers.nine.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 9;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 9;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 9;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 9;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 9;
    }
  });
  numbers.zero.addEventListener("click", () => {
    removeActive();
    if (item.classList.contains("active")) {
      firstNumber = 0;
    }
    if (items.add.classList.contains("active")) {
      myNumber = firstNumber + 0;
    } else if (items.multiplication.classList.contains("active")) {
      myNumber = firstNumber * 0;
    } else if (items.division.classList.contains("active")) {
      myNumber = firstNumber / 0;
    } else if (items.subtract.classList.contains("active")) {
      myNumber = firstNumber - 0;
    }
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
const removeActive = () => {
  if (
    items.multiplication.classList.contains("active") ||
    items.division.classList.contains("active") ||
    items.add.classList.contains("active") ||
    items.subtract.classList.contains("active")
  ) {
    item.classList.remove("active");
  }
};

operationItems();

operationNumber();

console.log(numbers);
console.log(items);
