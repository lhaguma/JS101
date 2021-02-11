//Import Objects and functions
const readline = require('readline-sync');
const messages = require('./message_Mortgage_Calculator.json');

function prompt(message) {
  console.log(`==> ${message}`);
}

function invalidNumber(number) {
  return isNaN(number) || number <= 0;
}

function monthPay(loanAmount, InterestRate, Duration) {
  let interest = Number(InterestRate) / 1200;
  let monthlyLoanDuration = Number(Duration) * 12;

  let monthlypay =  Number(loanAmount) * (interest /
    (1 - Math.pow((1 + interest), (-monthlyLoanDuration))));

  return monthlypay;
}

//Start up
prompt(messages.Welcome);

while (true) {
  prompt('********************************************');

  //Inputs
  prompt(messages.LoanAmount);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(messages.invalid.loan);
    loanAmount = readline.question();
  }

  prompt(messages.YearlyInterestRate);
  prompt(messages.interestRateExample);
  let yearlyInterestRate = readline.question();

  while (invalidNumber(yearlyInterestRate)) {
    prompt(messages.invalid.interest);
    yearlyInterestRate = readline.question();
  }

  prompt(messages.LoanDuration);
  let yearlyLoanDuration = readline.question();

  while (invalidNumber(yearlyLoanDuration)) {
    prompt(messages.invalid.duration);
    yearlyLoanDuration = readline.question();
  }

  //Processing steps
  let monthlyPayment
  = monthPay(loanAmount, yearlyInterestRate, yearlyLoanDuration);

  //print monthly payment
  console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  //Repeat?
  prompt(messages.again);
  let again = readline.question();
  if (again[0].toLowerCase() !== 'y') break;
}