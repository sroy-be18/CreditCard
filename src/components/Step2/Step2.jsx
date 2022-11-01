import React, { useState, useEffect } from 'react';
import Validation from '../Validation/Validation';
const Step2 = ({ tenure, setTenure, loanAmount, setLoanAmount }) => {
  const [interestAmount, setInterestAmount] = useState();

  const calculateInterestAmount = () => {
    if (loanAmount.error) {
      setInterestAmount(0);
    }
    if (loanAmount.value !== '' && tenure && loanAmount.error === '')
      setInterestAmount(((loanAmount.value * tenure * 0.05) / 12).toFixed(2));
  };

  const handleTenureChange = (e) => {
    setTenure(e.target.value);
  };

  const handleLoanChange = (e) => {
    let loanAmountError = Validation(e.target.value);
    setLoanAmount((prev) => ({
      value: e.target.value,
      error: loanAmountError,
    }));
  };

  useEffect(() => {
    calculateInterestAmount();
  }, [loanAmount.value, tenure]);

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item step">
        <div className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <div className="steps-header">
              <span>Step 2: Choose your loan amount</span>
            </div>
          </button>
        </div>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body step-body">
            <form>
              <div className="step-2-options">
                <label>Loan tenure: </label>
                <input
                  className="loan-tenure"
                  value={tenure}
                  onChange={handleTenureChange}
                  type="text"
                ></input>
              </div>
              <div className="row step-2-options">
                <label className="col-3">
                  Specify the exact loan amount you wish to avail (in Rupees):{' '}
                </label>
                <div className="col-4">
                  <div className="row">
                    <input
                      className="loan-input"
                      value={loanAmount.value}
                      onChange={handleLoanChange}
                      type="text"
                    ></input>
                    {loanAmount.error && (
                      <p className="error">{loanAmount.error}</p>
                    )}
                    <span className="loan-input-text">
                      (The amount displayed above is the maximum loan amount you
                      are eligible for. You can edit the Loan Amount to a lesser
                      value)
                    </span>
                  </div>
                </div>
              </div>
              <div className="row step-2-options">
                <ul className="step-2-list">
                  <li>
                    <label>For the above loan amount: </label>
                    <span className="red-text"> {loanAmount.value}</span>
                  </li>
                  <br></br>
                  <li>
                    Your initial interest amount will be (in Rupees):{' '}
                    <span className="interest-amount red-text">
                      {interestAmount}
                    </span>
                  </li>
                  <br></br>
                  <li>Your EMI (Equated Monthly Installments) will be</li>
                  <br></br>
                  <li>
                    At an annual reducing balance interest rate of:{' '}
                    <span className="red-text"> 5%</span>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
