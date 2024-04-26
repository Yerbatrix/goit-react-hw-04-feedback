import React from 'react';
import css from './Counter.module.css';

const Counter = ({ good, neutral, bad, total }) => {
  return (
    <div className={css.counter}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
    </div>
  );
};

export default Counter;
