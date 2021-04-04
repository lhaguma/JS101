/*
P
  - input: positive integer
  - output: positive integer
  - rules
    - explicit: numbers will be reversed
    - implicit: remove leading zeros
E - given below
D - strings
A
  - create function 'reservseNumber' with a 'number' parameter
  - convert 'number' into string and call it 'strNumber'
  - create an empty string called 'result'
  - iterate from the end of 'strNumber' to the beginning of 'strNumber'
  - append each char of 'strNumber' to 'result'
  - convert 'results' to a number and return it
*/
// C

function reverseNumber (number) {
  let strNumber = String(number);
  let result = "";

  for (let idx = strNumber.length - 1; idx >= 0; idx -= 1) {
    result += strNumber[idx];
  }
  return Number(result);
}


console.log(reverseNumber(12345) === 54321);    // 54321
console.log(reverseNumber(12213) === 31221);    // 31221
console.log(reverseNumber(456) === 654);      // 654
console.log(reverseNumber(12000) === 21);    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1) === 1);        // 1