import React, { useState } from 'react';
import BMIForm from './Components/BMIForm';
import BMIDisplay from './Components/BMIDisplay';
import './App.css';

function App() {
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
    setCategory(getBMICategory(bmiValue));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <img src="https://tse2.mm.bing.net/th?id=OIP.5DVYYcFEjkwHm7XIQS3bzAHaEK&pid=Api&P=0&h=180" alt="BMI Illustration" className="bmi-image" />
      <BMIForm onCalculate={calculateBMI} />
      {bmi !== null && <BMIDisplay bmi={bmi} category={category} />}
    </div>
  );
}

export default App;
