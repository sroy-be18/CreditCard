import React from 'react';

const Step3 = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item step">
        <div className="accordion-header " id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <div className="steps-header">
              <span>
                Step 3: Please provide the details to get your funds instantly
              </span>
            </div>
          </button>
        </div>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className="row step-3-body">
              <div className="step-3 booking-details">
                <div className="step-3-input-header">Booking Details</div>
                <div className="step-3-input-body">
                  <div className="row">
                    <label className="col-8">
                      Citibank account to credit the loan amount:{' '}
                    </label>
                    <span className="col">
                      <select className="accounts" name="accounts">
                        <option selected disabled hidden value="none">
                          Select Account
                        </option>
                        <option value="123456778345">123456778345</option>
                        <option value="876543219012">876543219012</option>
                        <option value="123409876456">123409876456</option>
                        <option value="099090785634">099090785634</option>
                      </select>
                    </span>
                  </div>
                  <br></br>
                  <div className="row">
                    <label className="col-8">Purpose of Loan: </label>
                    <span className="col">
                      <select className="purpose" name="purpose">
                        <option selected disabled hidden value="none">
                          Select Purpose
                        </option>
                        <option value="Purpose 1">Purpose 1</option>
                        <option value="Purpose 2">Purpose 2</option>
                        <option value="Purpose 3">Purpose 3</option>
                        <option value="Purpose 4">Purpose 4</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row step-3-body">
              <div className="step-3 personal-details">
                <div className="step-3-input-header">Personal details</div>
                <div className="step-3-input-body">
                  <div className="row">
                    <label className="col-8">Employment: </label>
                    <span className="col">
                      <select className="employments" name="employments">
                        <option selected disabled hidden value="none">
                          Select Employment
                        </option>
                        <option value="Employment 1">Employment 1</option>
                        <option value="Employment 2">Employment 2</option>
                        <option value="Employment 3">Employment 3</option>
                        <option value="Employment 4">Employment 4</option>
                      </select>
                    </span>
                  </div>
                  <br></br>
                  <div className="row">
                    <label className="col-8">Profession: </label>
                    <span className="col">
                      <select className="profession" name="profession">
                        <option selected disabled hidden value="none">
                          Select Profession
                        </option>
                        <option value="Profession 1">Profession 1</option>
                        <option value="Profession 2">Profession 2</option>
                        <option value="Profession 3">Profession 3</option>
                        <option value="Profession 4">Profession 4</option>
                      </select>
                    </span>
                  </div>
                  <br></br>
                  <div className="row">
                    <label className="col-8">Education: </label>
                    <span className="col">
                      <select className="education" name="education">
                        <option selected disabled hidden value="none">
                          Select Education
                        </option>
                        <option value="Education 1">Education 1</option>
                        <option value="Education 2">Education 2</option>
                        <option value="Education 3">Education 3</option>
                        <option value="Education 4">Education 4</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="steps-header">
              <span>Get Funds Instantly</span>
            </div>
            <ul>
              <li>
                <div className="step-3-body">
                  This is a straight through process for availing loan on Citi
                  Credit Card. To know more{' '}
                  <a className="link" href="/">
                    Click here
                  </a>{' '}
                  (FAQ){' '}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
