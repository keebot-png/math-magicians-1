import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });

  const handleClick = (e) => {
    const buttonName = e.target.name;
    setState((state) => calculate(state, buttonName));
  };

  const { total, next } = state;
  let result = 0;
  if (total === null && next !== null) {
    result = next;
  } else if (total !== null && next === null) {
    result = total;
  } else {
    result = next;
  }

  return (

    <div className="calculator">
      <div className="calculator-screen">{result}</div>
      <div className="calculator-keys">

        <button name="AC" onClick={handleClick} type="button">AC</button>
        <button name="+/-" onClick={handleClick} type="button">+/-</button>
        <button name="%" onClick={handleClick} type="button">%</button>

        <button name="÷" onClick={handleClick} type="button" className="operator">÷</button>

        <button name="7" onClick={handleClick} type="button">7</button>
        <button name="8" onClick={handleClick} type="button">8</button>
        <button name="9" onClick={handleClick} type="button">9</button>

        <button name="x" type="button" onClick={handleClick} className="operator">x</button>

        <button name="4" onClick={handleClick} type="button">4</button>
        <button name="5" onClick={handleClick} type="button">5</button>
        <button name="6" onClick={handleClick} type="button">6</button>

        <button name="-" type="button" onClick={handleClick} className="operator">-</button>

        <button name="1" onClick={handleClick} type="button">1</button>
        <button name="2" onClick={handleClick} type="button">2</button>
        <button name="3" onClick={handleClick} type="button">3</button>

        <button name="+" onClick={handleClick} type="button" className="operator">+</button>

        <button name="0" onClick={handleClick} type="button" className="zero">0</button>

        <button name="." onClick={handleClick} type="button">.</button>

        <button name="=" onClick={handleClick} type="button" className="operator">=</button>
      </div>
    </div>
  );
};

export default Calculator;
