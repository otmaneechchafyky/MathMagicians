import React, { useState } from 'react';
import Buttons from './buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculation = (buttonName) => {
    setCalculatorState((prevState) => calculate(prevState, buttonName));
  };

  return (
    <div className="calculator-container">
      <div className="result">
        {calculatorState.next || calculatorState.total || 0}
      </div>
      <Buttons handleCalculation={handleCalculation} />
    </div>
  );
}

export default Calculator;
