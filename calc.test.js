const calc = require('./calc')

calc.operand1 = '3'
calc.operand2 = '9'
test('add two numbers', () => expect(
  calc['+'](calc.operand1, calc.operand2)).toBe(calc.operand1 + calc.operand2))
test('subtract two numbers', () => expect(
  calc['-'](calc.operand1, calc.operand2)).toBe(calc.operand1 - calc.operand2))
test('multiply two numbers', () => expect(
  calc['*'](calc.operand1, calc.operand2)).toBe(calc.operand1 * calc.operand2))
test('divide two numbers', () => expect(
  calc['/'](calc.operand1, calc.operand2)).toBe(calc.operand1 / calc.operand2))
calc.operator = '/'
test('operate two numbers', () =>
  expect(calc.operate()).toBe(calc.operand1 / calc.operand2))