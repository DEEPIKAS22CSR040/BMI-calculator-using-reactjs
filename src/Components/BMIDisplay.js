import React from 'react';

function BMIDisplay({ bmi, category }) {
  return (
    <div className="result">
      <h2>Your BMI is: {bmi.toFixed(2)}</h2>
      <p>You are classified as: {category}</p>
    </div>
  );
}

export default BMIDisplay;
