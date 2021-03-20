import React from 'react'
// import './App.css';


const DisplayData = ({results,clearFields,userValues}) => {
    return (
        <div className='form-items' className='displayData' >
              
              <div>
                <label id='label'>Monthly EMI:</label>
                <input type='text' value={results.monthlyPayment} disabled />
              </div>
              <div>
                <label id='label'>Total Amount: </label>
                <input type='text' value={results.totalPayment} disabled />
              </div>
              <div>
                <label id='label'>Interest Payable:</label>
                <input type='text' value={results.totalInterest} disabled />
              </div>
              
              <input
                className='button'
                value='Refresh'
                type='submit'
                onClick={clearFields}
              />
            </div>
    )
}

export default DisplayData



// <h4>
//                 Loan amount: ${userValues.amount} <br /> Interest:{' '}
//                 {userValues.interest}% <br /> Years to repay: {userValues.years}
//               </h4>