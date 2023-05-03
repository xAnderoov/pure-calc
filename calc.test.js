const calc = require('./calc')

let number1 = 3;
let number2 = 5;
test('adds two numbers', () =>
  expect(calc['+'](number1, number2)).toBe(number1 + number2))
test('subtructs two numbers', () =>
  expect(calc['-'](number1, number2)).toBe(number1 - number2))
test('multiplyes two numbers', () =>
  expect(calc['*'](number1, number2)).toBe(number1 * number2))
test('divides two numbers', () =>
  expect(calc['/'](number1, number2)).toBe(number1 / number2))
test('operates two numbers', () =>
  expect(calc.operate(number1, ['+'], number2)).toBe(number1 + number2))