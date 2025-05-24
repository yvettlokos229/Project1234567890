function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  const result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  if (num2 === 0) throw new Error("Cannot divide by zero");
  const result = num1 / num2;
  return result;
}
