import React from "react";

class Calculator extends React.Component {
  // Your code here
  render() {
    return (
    <div className="calculator">
    <div data-testid="name">Calculator</div>

    <div data-testid="display" className="display"></div>

    <div className="number-inputs">
    <input data-testid="num1" id="num1" type="number"></input>
    <div data-testid="selected-operation"></div>
    <input data-testid="num2" id="num2" type="number"></input>
    </div>

    <div className="operation-selectors">
    <button data-testid="add">+</button>
    <button data-testid="sub">-</button>
    <button data-testid="mul">x</button>
    <button data-testid="div">/</button>
    </div>

    <div className="options">
    <button data-testid="clear" className="clear">
    Clear
    </button>
    <button data-testid="calc">Calculate</button>
    </div>

    <div data-testid="error" id="error" className="error"></div>
    </div>
    );
  }
}

export default Calculator;