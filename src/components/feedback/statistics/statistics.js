import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive feedback: {positivePercentage}%</span>
  </>
);

export default Statistics;
