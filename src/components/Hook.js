import React, { useState } from "react";

const Calculator = () => {
    let [numOne, setNumOne] = useState('')
    let [numTwo, setNumTwo] = useState('')
    const [selectedOperator, setSelectedOperator] = useState('+')
    const [error, setError] = useState('')
    console.log(error)

  const updateNumOne = (e) => {
    setNumOne(e.target.value)
  }
  const updateNumTwo = (e) => {
    setNumTwo(e.target.value)
  }

  const onCalculate = () => {
    if(selectedOperator === "+") {
      numOne = Number(numOne)
      numTwo = Number(numTwo)
      const output = numOne + numTwo
      const display = document.getElementById('display')
      display.innerHTML = output
    }
    if(selectedOperator === "-") {
      numOne = Number(numOne)
      numTwo = Number(numTwo)
      const output = numOne - numTwo
      const display = document.getElementById('display')
      display.innerHTML = output
    }
    if(selectedOperator === "x") {
      numOne = Number(numOne)
      numTwo = Number(numTwo)
      const output = numOne * numTwo
      const display = document.getElementById('display')
      display.innerHTML = output
    }
    if(selectedOperator === "/") {
      numOne = Number(numOne)
      numTwo = Number(numTwo)
      const output = numOne/numTwo
      const display = document.getElementById('display')
      display.innerHTML = output
    }
    // if(numOne.toEmpty()||numTwo.toEmpty()){
    //   const errMsg = 'Select Two Numbers'
    //   setError(errMsg)
    // }

  }
  // const ifError = () => {
  //   if(numOne.toEmpty() || !numTwo){
  //     const errMsg = 'Select Two Numbers'
  //     setError(errMsg)
  //   }
  // }
  const onClear = () => {

    const display = document.getElementById('display')
    display.innerText = ''

  }
  const updateSelectedOperator = () => {
    const selectedOperator = document.getElementById('selectedOperator')
    console.log(selectedOperator)
    setSelectedOperator(selectedOperator)

  }
  const onAdd = () => {
    const selectedOperator = document.getElementById('selectedOperator')
    selectedOperator.innerText = "+"
    
   
  }

  const onSub = () => {
    const selectedOperator = document.getElementById('selectedOperator')
    const selectedOperatorChange = selectedOperator.innerText = "-"
    setSelectedOperator(selectedOperatorChange)
    
  }

  const onMult = () => {
    const selectedOperator = document.getElementById('selectedOperator')
    const selectedOperatorChange = selectedOperator.innerText = "x"
    setSelectedOperator(selectedOperatorChange)

  }
  const onDiv = () => {
    const selectedOperator = document.getElementById('selectedOperator')
    const selectedOperatorChange = selectedOperator.innerText = "/"
    setSelectedOperator(selectedOperatorChange)
    
  }

  

  
  

  return (
  <div className="calculator">
  <div data-testid="name">Calculator</div>

  <div data-testid="display" id = 'display' className="display"></div>

  <div className="number-inputs">
  <input data-testid="num1" id="num1" type="number" value={numOne} onChange={(e) => setNumOne(e.target.value)}></input>
  <div data-testid="selected-operation" id="selectedOperator">{selectedOperator}</div>
  <input data-testid="num2" id="num2" type="number" value={numTwo} onChange={(e) => setNumTwo(e.target.value)}></input>
  </div>

  <div className="operation-selectors">
  <button data-testid="add" onClick={onAdd}>+</button>
  <button data-testid="sub" onClick={onSub}>-</button>
  <button data-testid="mul" onClick={onMult}>x</button>
  <button data-testid="div" onClick={onDiv}>/</button>
  </div>

  <div className="options">
  <button data-testid="clear" className="clear" onClick={onClear}>
  Clear
  </button>
  <button data-testid="calc" onClick={onCalculate}>Calculate</button>
  </div>

  <div data-testid="error" id="error" className="error">{error}</div>
  </div>
  );
};

export default Calculator;