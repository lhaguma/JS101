function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function newFactors(number) {
  let divisor = number;
  let factors = [];

  while (divisor !== 0 && number > 0 ) {
    if (number % divisor === 0 ) { // only divisors that evenly divides into number are pushed into factors 
      factors.push(number / divisor);
    }
    divisor += - 1;
  }
  return factors;
}
console.log(factors(24));
// console.log(factors(-24)); //infinite loop
// console.log(factors(0)); //raise expections

console.log(newFactors(24));
console.log(newFactors(-24)); //empty
console.log(newFactors(0)); //empty


