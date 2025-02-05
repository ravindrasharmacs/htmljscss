'use client';

import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function MultiplyComponent() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const handleMultiply = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
    } else {
      setResult(num1 * num2);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Multiply Two Numbers</h1>

      <div className={styles.grid}>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Enter first number"
          className={styles.input}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Enter second number"
          className={styles.input}
        />
        <button onClick={handleMultiply} className={styles.button}>
          Multiply
        </button>
      </div>

      {result !== null && (
        <p className={styles.result}>Result: {result}</p>
      )}
    </div>
  );
}
