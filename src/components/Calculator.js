import React, { useState } from 'react';
import styles from './Calculator.module.css';
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
    <div className={styles.cont}>
      <p className={styles.title}>Lets do some Math!</p>
      <div className={styles.calculator_container}>
        <div className={styles.result}>
          {calculatorState.next || calculatorState.total || 0}
        </div>
        <Buttons handleCalculation={handleCalculation} />
      </div>
    </div>
  );
}

export default Calculator;
