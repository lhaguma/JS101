function stringy (positiveNmber) {
  let result = '1';
  let num = 1;
  while (num < positiveNmber) {
    if (num % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
    num += 1;
  }
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"