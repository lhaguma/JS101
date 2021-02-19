//from previous exercise
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


function signedIntegerToString (number) {
  switch (Math.sign(number)) {
    case 1 : return '+' + integerToString(number);
    case -1 : return '-' + integerToString(-number);
    default : return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");