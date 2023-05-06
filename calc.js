const display = document.querySelector('.display');

const calc = {
  operator: '',
  operand1: () => display.textContent.split(`${calc.operator}`)[0],
  operand2: () => calc.operator ?
    display.textContent.split(`${calc.operator}`)[1] : null,
  ['+']: (a, b) => a + b,
  ['-']: (a, b) => a - b,
  ['*']: (a, b) => a * b,
  ['/']: (a, b) => a / b,
  operate: () => calc[`${calc.operator}`]
    (Number(calc.operand1()), Number(calc.operand2())),
  setDisplay: value => {
    if (display.textContent === '0' && !calc.operator)
      display.textContent = value
    else
      display.textContent += value
  },
  clearDisplay: () => display.textContent = ''
}

const inputHandler = e => {
  e.preventDefault();
  const inputText = e.target.textContent;
  const operations = ['+', '-', '*', '/'];

  if (inputText.search(/[0-9]/) !== -1)
    calc.setDisplay(inputText)
  if (operations.includes(inputText) &&
    !calc.operand2()) {
    if (calc.operator) {
      display.textContent = display.textContent.slice(0, -1).concat(inputText);
    } else {
      calc.setDisplay(inputText)
    }
    calc.operator = inputText;
  }
  if (inputText === '=') {
    let temp = calc.operate();
    calc.clearDisplay();
    calc.setDisplay(temp);
    calc.operator = '';
  }
}
const buttons = document.querySelectorAll('.calc > button');
Array.from(buttons).forEach(button =>
  button.addEventListener('click', inputHandler));

// module.exports = calc;