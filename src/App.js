import { useState } from 'react';
import './App.css';
import InputData from './components/InputData'
import DisplayData from './components/DisplayData'


function App() {
  const [userValues, setUserValues] = useState({
    amount: '',
    interest: '',
    years: '',
  });

  const [results, setResults] = useState({
    monthlyPayment: '0',
    totalPayment: '0',
    totalInterest: '0',
    isResult: false,
  });

  const [error, setError] = useState('');


  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (isValid()) {
      setError('');
      calculateResults(userValues);
    }
  };

  const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });



  const calculateResults = ({ amount, interest, years }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(3);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(3);
      const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed(3);

      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    }
    return;
  };



  const isValid = () => {
    const { amount, interest, years } = userValues;
    let actualError = '';

    // Validate if there are values
    if (!amount || !interest || !years) {
      actualError = 'All the values are required';
    }

    // Validade if the values are numbers
    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      actualError = 'All the values must be a valid number';
    }

    // Validade if the values are positive numbers
    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      actualError = 'All the values must be a positive number';
    }

    if (actualError) {
      setError(actualError);
      return false;
    }
    return true;
  };


  const clearFields = () => {
    setUserValues({
      amount: '',
      interest: '',
      years: '',
    });

    setResults({
      monthlyPayment: '0',
      totalPayment: '0',
      totalInterest: '0',
      isResult: false,
    });
  };


  return (
    <div className="App">

      <h1>EMI Loan Calculator</h1>
      <div className='display'>
        <InputData results={results} userValues={userValues} userValues={userValues} handleInputChange={handleInputChange} handleSubmitValues={handleSubmitValues} clearFields={clearFields} error={error} />
        <DisplayData clearFields={clearFields} results={results} userValues={userValues} />
      </div>
    </div>
  );
}

export default App;
