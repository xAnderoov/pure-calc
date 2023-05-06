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
  operate: () => Math.round(calc[`${calc.operator}`]
    (Number(calc.operand1()), Number(calc.operand2())) * 1000) / 1000
}

const inputHandler = e => {
  e.preventDefault();
  const inputText = e.target.textContent;
  const operations = ['+', '-', '*', '/'];
  const updateDisplay = value => {
    if (value.toString().search(/[0-9]/) !== -1) {
      if (display.textContent === '0' && !calc.operator)
        display.textContent = value
      else
        display.textContent += value
    }
    if (operations.includes(value)) {
      if (calc.operator) {
        display.textContent =
          display.textContent.slice(0, -1).concat(inputText);
      } else {
        display.textContent += value
      }
      calc.operator = inputText;
    }
    if (value === Infinity || value === -Infinity)
      display.textContent += value;
  }
  const calculate = () => {
    let temp = calc.operate();
    calc.operator = '';
    display.textContent = '';
    updateDisplay(temp);
  }

  if (inputText === 'C') {
    calc.operator = '';
    display.textContent = 0;
  }

  if (inputText === '=' && calc.operand2()) {
    calculate();
    return
  }
  if (operations.includes(inputText) && calc.operand2())
    calculate()
  updateDisplay(inputText);
}
const buttons = document.querySelectorAll('.calc > button');
Array.from(buttons).forEach(button =>
  button.addEventListener('click', inputHandler));

// module.exports = calc;