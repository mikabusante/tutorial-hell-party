import React, { useState } from 'react';
import styled from 'styled-components';

const Display = styled.div`
  height: 1em;
`;

const CalculatorTwo = () => {
  const [display, setDisplay] = useState('0');
  const [value, setValue] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [storedOperator, setStoredOperator] = useState(null);

  const inputDigit = digit => {
    if (display === '0') {
      setDisplay(digit);
    } else {
      setDisplay(display + digit);
    }

    if (waiting) {
      setDisplay(digit);
      setWaiting(false);
    }
  };

  const clear = () => {
    setDisplay('');
    setValue(null);
  };

  const changeSign = () => {
    setDisplay(display * -1);
  };

  const inputDecimal = () => {
    if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const makePercent = () => {
    setDisplay(display / 100);
  };

  const add = () => {
    setValue(parseFloat(display));
    setWaiting(true);
    setStoredOperator('+');
  };

  const subtract = () => {
    setValue(parseFloat(display));
    setWaiting(true);
    setStoredOperator('-');
  };

  const multiply = () => {
    setValue(parseFloat(display));
    setWaiting(true);
    setStoredOperator('*');
  };

  const divide = () => {
    setValue(parseFloat(display));
    setWaiting(true);
    setStoredOperator('/');
  };

  const evaluate = () => {
    const secondValue = parseFloat(display);

    if (storedOperator === '+') {
      setValue(secondValue + value);
      setDisplay(String(secondValue + value));
    }

    if (storedOperator === '-') {
      setValue(value - secondValue);
      setDisplay(String(value - secondValue));
    }

    if (storedOperator === '*') {
      setValue(value * secondValue);
      setDisplay(String(value * secondValue));
    }

    if (storedOperator === '/') {
      setValue(value / secondValue);
      setDisplay(String(value / secondValue));
    }
  };

  return (
    <div>
      <Display>{display}</Display>

      <div>
        <button onClick={() => inputDigit('9')}>9</button>
        <button onClick={() => inputDigit('8')}>8</button>
        <button onClick={() => inputDigit('7')}>7</button>
        <button onClick={() => inputDigit('6')}>6</button>
        <button onClick={() => inputDigit('5')}>5</button>
        <button onClick={() => inputDigit('4')}>4</button>
        <button onClick={() => inputDigit('3')}>3</button>
        <button onClick={() => inputDigit('2')}>2</button>
        <button onClick={() => inputDigit('1')}>1</button>
        <button onClick={() => inputDigit('0')}>0</button>
      </div>

      <div>
        <button onClick={() => clear()}>AC</button>
        <button onClick={() => changeSign()}>+-</button>
        <button onClick={() => makePercent()}>%</button>
        <button onClick={() => inputDecimal()}>.</button>
      </div>

      <div>
        <button onClick={() => add()}>+</button>
        <button onClick={() => subtract()}>-</button>
        <button onClick={() => divide()}>/</button>
        <button onClick={() => multiply()}>*</button>
        <button onClick={() => evaluate()}>=</button>
      </div>
    </div>
  );
};

export default CalculatorTwo;
