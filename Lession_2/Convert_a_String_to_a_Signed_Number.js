function stringToSignedInteger (string) {
  let numbers = {
    0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9
  };

  let sign;
  if (string[0] === '-' || string[0] === '+') {
    if (string[0] === '-') sign = -1;
    string = string.slice(1);
  }

  let arrValues = string.split('').map(num => numbers[num]);
  let result = 0;

  arrValues.forEach(element => {
    result = (result * 10) + element;
  });
  if (sign) {
    return sign * result;
  } else {
    return result;
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

console.log(stringToSignedInteger("4321"));
console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("+100"));