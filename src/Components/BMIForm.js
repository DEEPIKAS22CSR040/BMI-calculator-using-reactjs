import React, { useState } from 'react';

function BMIForm({ onCalculate }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight && height) {
      onCalculate(parseFloat(weight), parseFloat(height));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Calculate BMI</button>
    </form>
  );
}

export default BMIForm;
