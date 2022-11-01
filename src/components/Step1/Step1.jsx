import React, { useState } from 'react';
import Step2 from '../Step2/Step2';
const Step1 = () => {
  const [card, setCard] = useState({ value: '', error: '' });
  const [tenure, setTenure] = useState();
  const [loanAmount, setLoanAmount] = useState({ value: '', error: '' });

  const handleCardClick = (e) => {
    setCard({
      value: e.target.value,
      error: '',
    });
    var radio = document.querySelector(
      'input[type=radio][name=flexRadioDefaultDefault]:checked'
    );
    radio.checked = false;
    setLoanAmount({
      value: '0',
      error: '',
    });
    setTenure(0);
  };

  const handleTenureClick = (e) => {
    if (card.value) {
      setTenure(Number(e.target.value));
      setLoanAmount({
        value: '113000',
        error: '',
      });
      setCard({
        error: '',
      });
    } else {
      setCard({
        value: '',
        error: ' *Please select a card',
      });
    }
  };

  return (
    <>
      <div className="accordion accordion-flush">
        <div className="accordion-item step">
          <div className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <div className="steps-header">
                <span>Step 1: Check your loan eligibilty</span>
              </div>
            </button>
          </div>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body step-body">
              <div>
                <span>Choose the card on which you want to avail a loan:</span>
                <span>
                  <select
                    className="cards"
                    onChange={handleCardClick}
                    name="cards"
                  >
                    <option value="none" selected disabled hidden>
                      Select a Card
                    </option>
                    <option value="1234567887654321">1234567887654321</option>
                    <option value="8765432112345678">8765432112345678</option>
                    <option value="1234432156788765">1234432156788765</option>
                    <option value="4321567812348765">4321567812348765</option>
                  </select>
                </span>
                <span className="error">{card.error}</span>
              </div>
              <div className="loan-options">
                <br></br>
                <span>
                  Select the loan options which suits your requirement:
                </span>
                <div className="loan-headers">
                  <div className="header-options">
                    Available tenure in months
                  </div>
                  <div className="header-options">
                    Against your credit limit
                  </div>
                </div>
                <div className="container option-containers">
                  <div className="form-check">
                    <span>06</span>
                    <input
                      className="check-input"
                      value={6}
                      onClick={handleTenureClick}
                      type="radio"
                      name="flexRadioDefaultDefault"
                      id="option1"
                    />
                    <label className="form-check-label" htmlFor="option1">
                      Rs. 113000
                    </label>
                  </div>
                  <div className="form-check">
                    <span>12</span>
                    <input
                      className="check-input"
                      value={12}
                      onClick={handleTenureClick}
                      type="radio"
                      name="flexRadioDefaultDefault"
                      id="option2"
                    />
                    <label className="form-check-label" htmlFor="option2">
                      Rs. 113000
                    </label>
                  </div>
                  <div className="form-check">
                    <span>24</span>
                    <input
                      className="check-input"
                      value={24}
                      onClick={handleTenureClick}
                      type="radio"
                      name="flexRadioDefaultDefault"
                      id="option3"
                    />
                    <label className="form-check-label" htmlFor="option3">
                      Rs. 113000
                    </label>
                  </div>
                  <div className="form-check">
                    <span>36</span>
                    <input
                      className="check-input"
                      value={36}
                      onClick={handleTenureClick}
                      type="radio"
                      name="flexRadioDefaultDefault"
                      id="option4"
                    />
                    <label className="form-check-label" htmlFor="option4">
                      Rs. 113000
                    </label>
                  </div>
                  <div className="form-check">
                    <span>48</span>
                    <input
                      className="check-input"
                      value={48}
                      onClick={handleTenureClick}
                      type="radio"
                      name="flexRadioDefaultDefault"
                      id="option5"
                    />
                    <label className="form-check-label" htmlFor="option5">
                      Rs. 113000
                    </label>
                  </div>
                </div>
                <br></br>
                {/* <table className="table table-borderless text-center">
                                    <tr>
                                        <th>Avilable tenure in Months</th>
                                        <th></th>
                                        <th>Against your Credit Limit</th>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td> <input className="check-input" type="radio" name="flexRadioDefault" onChange={handleTenureClick} value={6} /></td>
                                        <td >Rs. 1130000</td>

                                    </tr>
                                    <tr>
                                        <td >12</td>
                                        <td> <input className="check-input" type="radio" name="flexRadioDefault" onChange={handleTenureClick} value={12} /></td>
                                        <td >Rs. 1130000</td>

                                    </tr>
                                    <tr>
                                        <td >24</td>
                                        <td> <input className="check-input" type="radio" name="flexRadioDefault" onChange={handleTenureClick} value={24} /></td>
                                        <td >Rs. 1130000</td>

                                    </tr>
                                    <tr>
                                        <td >36</td>
                                        <td> <input className="check-input" type="radio" name="flexRadioDefault" onChange={handleTenureClick} value={36} /></td>
                                        <td >Rs. 1130000</td>

                                    </tr>
                                    <tr>
                                        <td>48</td>
                                        <td> <input className="check-input" type="radio" name="flexRadioDefault" onChange={handleTenureClick} value={48} /></td>
                                        <td > Rs. 1130000</td>

                                    </tr>
                                </table> */}
              </div>
              <a href="/" className="read-more">
                Click here to learn more about credit/cash limit
              </a>
              <br></br>
              <span>
                The loan options above are only for the card chosen by you. You
                can avail of loans on your other cards depending on your
                eligibility.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Step2
        tenure={tenure}
        setTenure={setTenure}
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
      />
    </>
  );
};

export default Step1;
