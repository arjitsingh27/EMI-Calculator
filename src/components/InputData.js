import React from 'react'
// import './App.css';



const InputData = ({ userValues, handleInputChange, handleSubmitValues,error }) => {

    

    return (
        <form onSubmit={handleSubmitValues} className='inputData'>
            <div className='form-items'>
              <div>
                <label id='label'>Amount:</label>
                <input
                  type='text'
                  name='amount'
                  
                  value={userValues.amount}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label id='label'>Interest:</label>
                <input
                  type='text'
                  name='interest'
                  
                  value={userValues.interest}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label id='label'>Years:</label>
                <input
                  type='text'
                  name='years'
                  
                  value={userValues.years}
                  onChange={handleInputChange}
                />
              </div>
              <input type='submit' value='Submit' className='button' />
            </div>
            <p>{error}</p>
        </form>


    )
}

export default InputData
