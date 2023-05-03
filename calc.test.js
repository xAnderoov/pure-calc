const calc = require('./calc')

let number1 = 3;
let number2 = 5;
test('add two numbers', () =>
  expect(calc['+'](number1, number2)).toBe(number1 + number2))
test('subtract two numbers', () =>
  expect(calc['-'](number1, number2)).toBe(number1 - number2))
test('multiply two numbers', () =>
  expect(calc['*'](number1, number2)).toBe(number1 * number2))
test('divide two numbers', () =>
  expect(calc['/'](number1, number2)).toBe(number1 / number2))
test('operate two numbers', () =>
  expect(calc.operate(number1, ['+'], number2)).toBe(number1 + number2))