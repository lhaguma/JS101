function multiply(num1, num2) {
  return num1 * num2;
}

const square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

//generalize this function to a "power to the n" type function:
//cubed, to the 4th power, to the 5th, etc.

function powerToN (num, power) {
  let result = 1;

  for (let i = 1; i <= power; i += 1) {
    result *= multiply(num, 1);
  }

  return result;
}

console.log(powerToN(2,3)); //logs 8
console.log(powerToN(2,4)); //logs 16
