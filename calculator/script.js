const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      display.textContent = "0";
    } else if (value === "=") {
      if (operator && previousInput !== "") {
        currentInput = eval(`${previousInput}${operator}${currentInput}`);
        display.textContent = currentInput;
        operator = "";
        previousInput = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput !== "") {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
