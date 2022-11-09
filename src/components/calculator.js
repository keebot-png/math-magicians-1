import React from 'react';
import './calculator.css';
/* eslint-disable */
class Calculator extends React.Component {
  render() {
    return (

      <div className="calculator">
        <input type="text" className="calculator-screen" value="0" disabled />
        <div className="calculator-keys">

          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>

          <button type="button" className="operator">÷</button>

          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>

          <button className="operator">x</button>

          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>

          <button className="operator">-</button>

          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>

          <button type="button" className="operator">+</button>

          <button type="button" className="zero">0</button>

          <button type="button">.</button>

          <button type="button" className="operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
