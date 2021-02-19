function integerToString (number) {
  let strings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let result = '';
  do {
    let num = number % 10;
    result = strings[num] + result;

    number = Math.floor(number / 10);
  } while (number > 0);

  return result;
}

console.log( integerToString(4321));      // "4321"
console.log( integerToString(0));         // "0"
console.log( integerToString(5000));      // "5000"
console.log( integerToString(1234567890));      // "1234567890"