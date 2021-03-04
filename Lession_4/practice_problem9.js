// Add up all of the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// P
// input: object, output: number
// rules: add all the values of the object
// E
// D
// Array of object values
// A
/*
1. Convert object values into array
2. Sum each all the array element
*/
// C

let ageValues = Object.values(ages);
let sum = ageValues.reduce((prevValue, currValue) => prevValue + currValue, 0);
console.log(sum);

// basic approach
let ageSum = 0;
ageValues.forEach(element => {
  ageSum += element;
});

console.log(ageSum);
