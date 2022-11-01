const Validation = (loanAmount) => {
  let errors = '';
  if (loanAmount < 0) {
    console.log('Errors');
    errors = 'Amount Should be Greater than 0';
  } else if (loanAmount > 113000) {
    errors = 'Amount should be less than 113000';
  } else if (/\D/.test(loanAmount)) {
    console.log(loanAmount);
    errors = 'Amount should be Numeric';
  }
  return errors;
};

export default Validation;
