import React from 'react';
// import '../App.css';
import PropTypes from 'prop-types';
import styles from './buttons.module.css';

function Buttons({ handleCalculation }) {
  const handleClick = (buttonName) => {
    handleCalculation(buttonName);
  };

  return (
    <div className={styles.buttons}>
      <button className={styles.button} type="button" onClick={() => handleClick('AC')}>
        AC
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('+/-')}>
        +/-
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('%')}>
        %
      </button>
      <button className={styles.operator} type="button" onClick={() => handleClick('÷')}>
        ÷
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('7')}>
        7
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('8')}>
        8
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('9')}>
        9
      </button>
      <button className={styles.operator} type="button" onClick={() => handleClick('x')}>
        x
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('4')}>
        4
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('5')}>
        5
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('6')}>
        6
      </button>
      <button className={styles.operator} type="button" onClick={() => handleClick('-')}>
        -
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('1')}>
        1
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('2')}>
        2
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('3')}>
        3
      </button>
      <button className={styles.operator} type="button" onClick={() => handleClick('+')}>
        +
      </button>
      <button className={styles.ziro} type="button" onClick={() => handleClick('0')}>
        0
      </button>
      <button className={styles.button} type="button" onClick={() => handleClick('.')}>
        .
      </button>
      <button className={styles.operator} type="button" onClick={() => handleClick('=')}>
        =
      </button>
    </div>
  );
}

Buttons.propTypes = {
  handleCalculation: PropTypes.func.isRequired,
};

export default Buttons;
