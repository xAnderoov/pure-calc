const calc = {
  operator: '',
  operand1: '',
  operand2: '',
  ['+']: (a, b) => a + b,
  ['-']: (a, b) => a - b,
  ['*']: (a, b) => a * b,
  ['/']: (a, b) => a / b,
  operate: (num1, action, num2) => calc[`${action}`](num1, num2),
}

module.exports = calc;

add calc.js tests, basic