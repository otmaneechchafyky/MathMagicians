import React from 'react';
import Buttons from './buttons';
import '../App.css';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="result">0</div>
      <Buttons />
    </div>
  );
}

export default Calculator;
