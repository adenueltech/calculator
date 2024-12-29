import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  const handleClick = (value) => {
    if (isOperatorClicked) {
      setInput(value);
      setIsOperatorClicked(false);
    } else {
      setInput(input + value);
    }
  };

  const handleOperatorClick = (operator) => {
    if (result === null) {
      setResult(parseFloat(input));
    } else if (input && operator !== '=') {
      calculate();
    }
    setOperator(operator);
    setIsOperatorClicked(true);
  };

  const calculate = () => {
    if (operator && result !== null && input) {
      const current = parseFloat(input);
      let newResult = result;

      switch (operator) {
        case '+':
          newResult += current;
          break;
        case '-':
          newResult -= current;
          break;
        case '*':
          newResult *= current;
          break;
        case '/':
          newResult /= current;
          break;
        default:
          return;
      }

      setInput(String(newResult));
      setResult(newResult);
      setOperator(null);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
    setOperator(null);
  };

  const handleToggleSign = () => {
    setInput(input ? String(-parseFloat(input)) : '');
  };

  const handlePercentage = () => {
    setInput(input ? String(parseFloat(input) / 100) : '');
  };

  const handleEqualClick = () => {
    calculate();
    setOperator(null);
    setResult(null);
  };

  return (
    
    <div className="calculator">
        <div><h1>react js calculator </h1></div>
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        <button onClick={handleClear} className="button">AC</button>
        <button onClick={handleToggleSign} className="button">±</button>
        <button onClick={handlePercentage} className="button">%</button>
        <button onClick={() => handleOperatorClick('/')} className="button operator">÷</button>

        <button onClick={() => handleClick('7')} className="button">7</button>
        <button onClick={() => handleClick('8')} className="button">8</button>
        <button onClick={() => handleClick('9')} className="button">9</button>
        <button onClick={() => handleOperatorClick('*')} className="button operator">×</button>

        <button onClick={() => handleClick('4')} className="button">4</button>
        <button onClick={() => handleClick('5')} className="button">5</button>
        <button onClick={() => handleClick('6')} className="button">6</button>
        <button onClick={() => handleOperatorClick('-')} className="button operator">−</button>

        <button onClick={() => handleClick('1')} className="button">1</button>
        <button onClick={() => handleClick('2')} className="button">2</button>
        <button onClick={() => handleClick('3')} className="button">3</button>
        <button onClick={() => handleOperatorClick('+')} className="button operator">+</button>

        <button onClick={() => handleClick('0')} className="button zero">0</button>
        <button onClick={() => handleClick('.')} className="button">.</button>
        <button onClick={handleEqualClick} className="button operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;
