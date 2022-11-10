import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

/* eslint-disable */
class Calculator extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      next: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.name;
    this.setState((state) => calculate(state, buttonName));
  }
    
  render() {

    const { total, next } = this.state;
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

          <button name='AC' onClick={this.handleClick} type="button">AC</button>
          <button name='+/-' onClick={this.handleClick} type="button">+/-</button>
          <button name='%' onClick={this.handleClick} type="button">%</button>

          <button name='÷' onClick={this.handleClick} type="button" className="operator">÷</button>

          <button name='7' onClick={this.handleClick} type="button">7</button>
          <button name='8' onClick={this.handleClick} type="button">8</button>
          <button name='9' onClick={this.handleClick} type="button">9</button>

          <button name='x' onClick={this.handleClick} className="operator">x</button>

          <button name='4' onClick={this.handleClick} type="button">4</button>
          <button name='5' onClick={this.handleClick} type="button">5</button>
          <button name='6' onClick={this.handleClick} type="button">6</button>

          <button name='-' onClick={this.handleClick} className="operator">-</button>

          <button name='1' onClick={this.handleClick} type="button">1</button>
          <button name='2' onClick={this.handleClick} type="button">2</button>
          <button name='3' onClick={this.handleClick} type="button">3</button>

          <button name='+' onClick={this.handleClick} type="button" className="operator">+</button>

          <button name='0' onClick={this.handleClick} type="button" className="zero">0</button>

          <button name='.' onClick={this.handleClick} type="button">.</button>

          <button name='=' onClick={this.handleClick} type="button" className="operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
