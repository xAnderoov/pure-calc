const display = document.querySelector('.display');
const operations = ['+', '-', '*', '/'];

const calc = {
  getOperator: () => operations.reduce((acc, operation) => {
    const index = display.textContent.slice(1).indexOf(operation);
    return index !== -1 ? display.textContent[index + 1] : acc
  }, ''),
  getOperand1: () => display.textContent.split(`${calc.getOperator()}`)[0],
  getOperand2: () => calc.getOperator() ?
    display.textContent.split(`${calc.getOperator()}`)[1] : null,
  ['+']: (a, b) => a + b,
  ['-']: (a, b) => a - b,
  ['*']: (a, b) => a * b,
  ['/']: (a, b) => a / b,
  operate: () => Math.round(calc[`${calc.getOperator()}`]
    (Number(calc.getOperand1()), Number(calc.getOperand2())) * 1000) / 1000
}

const inputHandler = e => {
  e.preventDefault();
  const inputText = e.target.textContent;
  const updateDisplay = value => {
    if (value.toString().search(/[0-9]/) !== -1) {
      if (display.textContent === '0' && !calc.getOperator())
        display.textContent = value
      else
        display.textContent += value
    }
    if (operations.includes(value)) {
      if (calc.getOperator()) {
        display.textContent =
          display.textContent.slice(0, -1).concat(value);
      } else {
        display.textContent += value
      }
    }
    if (value === Infinity || value === -Infinity)
      display.textContent += value;
  }
  const calculate = () => {
    let temp = calc.operate();
    display.textContent = '';
    updateDisplay(temp);
  }

  if (inputText === 'C') {
    display.textContent = 0;
    return
  }

  if (inputText === 'CE') {
    display.textContent = calc.getOperand2()
      ? display.textContent.slice
        (0, display.textContent.indexOf(calc.getOperator()) + 1)
      : calc.getOperator() ? display.textContent.slice(0, -1) : 0;
    return
  }

  let isInfinite = Infinity === Math.abs(display.textContent);
  if (inputText === 'del') {
    if (isInfinite) {
      display.textContent = 0;
    } else {
      const updated = display.textContent.slice(0, -1);
      display.textContent = updated === '' ? 0 : updated;
    }
    return
  }
  
  if (isInfinite) return

  if (inputText === '=' && calc.getOperand2()) {
    calculate();
    return
  }
  if (operations.includes(inputText) && calc.getOperand2())
    calculate()
  updateDisplay(inputText);
}
const buttons = document.querySelectorAll('.calc > button');
Array.from(buttons).forEach(button =>
  button.addEventListener('click', inputHandler));

// module.exports = calc;